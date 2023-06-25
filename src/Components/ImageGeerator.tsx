import React , {useState} from "react";
import Search from "./Search/Search";
import useGenerateImageHook from "../hooks/useGenerateImageHook";

const ImageGenerator = (): JSX.Element => {
    const [Value, setValue] = useState<string>('')
    const { generate, loading, image } = useGenerateImageHook()
    const handleGenerate = ()=>{
      console.log(Value);
      generate(Value)
    }
  return (
    <div className="wrapper">
      <Search value={Value} setValue={setValue} generateImageHandler = {handleGenerate}/>
      {
        loading && (
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )
      }
    </div>
  )
};

export default ImageGenerator;
