import axios from 'axios'
import { Configuration, OpenAIApi } from 'openai';
import { useState } from 'react'
type bodyData = {
    prompt: string
}
const config = new Configuration({
    apiKey: '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',
});
const openai = new OpenAIApi(config);
const useGenerateImageHook = () => {
    const [loading, setloading] = useState<boolean>(false)
    const [image, setimage] = useState<boolean>(false)
    const generate = async (prompt: string) => {
        try {
            setloading(true)
            // const temp: bodyData = {
            //     prompt
            // }
            // const data = await fetch('http://localhost:8080/api/v1/dalle', { method: "POST", body: JSON.stringify(temp) })
            const response = await openai.createImage({
                prompt,
                n: 1,
                size: '1024x1024',
                response_format: 'b64_json'
            });
            setloading(false)
            console.log(response);
        } catch (error) {
            console.log(error);
            setloading(false)
        }
    }
    return { generate, loading, image };
}

export default useGenerateImageHook