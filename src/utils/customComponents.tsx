/* eslint-disable no-use-before-define */
/* eslint-disable max-len */
import React from 'react';
import { useFormikContext, getIn } from 'formik';
import './customComp.scss';
// import DatePicker from 'react-datepicker';
// import Select from 'react-select';

export const CustomInput = ({ field, form: { touched, errors }, ...props }) => {
  const touch = getIn(touched, field.name);
  const error = getIn(errors, field.name);
  return (
    <div className={`${props.styleData} space-y-10`} style={props.style}>
      {!props.withOutLabel && <span className="nameInput">{props.label}</span>}
      <input
        className={`form-control ${error && touch && 'is-invalid'} ${props.inputClassName} `}
        {...field}
        {...props}
      />
      {error && touch && <div className="invalid-feedback d-block mb-1">{error}</div>}
    </div>
  );
};
export const CustomPswInput = ({ field, form: { touched, errors }, ...props }) => {
  const touch = getIn(touched, field.name);
  const error = getIn(errors, field.name);

  return (
    <div className={`${props.styleData} space-y-10 ${props.pswClassName}`} style={props.style}>
      {!props.withOutLabel && <span className="nameInput">{props.label}</span>}
      <div className="position-relative">
        <input
          className={`form-control ${error && touch && 'is-invalid'} ${props.inputClassName} `}
          {...field}
          {...props}
        />
      
        <img
          onClick={() => props.setShow(prev => !prev)}
          alt=""
          className={error ? "signup-eye-imgerr" :'signup-eye-img'}
        />
      </div>
      {error && touch && <div className="invalid-feedback d-block mb-1">{error}</div>}
    </div>
  );
};

export const CustomTextArea = ({ field, form: { touched, errors }, ...props }) => {
  const touch = getIn(touched, field.name);
  const error = getIn(errors, field.name);

  return (
    <div className={`${props.styleData} space-y-10`} style={props.style}>
      {!props.withOutLabel && (
        <span className="nameInput">
          {props.label}
          {/* {props.requiredField && <span className="mendatory_sign">*</span>} */}
        </span>
      )}
      <textarea
        className={`form-control ${error && touch && 'is-invalid'} ${props.inputClassName} `}
        {...field}
        {...props}
      />
      {error && touch && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

export const CustomDropdown = ({ field, form: { touched, errors }, ...props }) => {
  const touch = getIn(touched, field.name);
  const error = getIn(errors, field.name);

  return (
    <>
      <div className={`${props.styleData} space-y-10`} style={props.style}>
        {!props.withOutLabel && (
          <span className="nameInput">
            {props.label}
            {props.requiredField && <span className="mendatory_sign">*</span>}
          </span>
        )}

        <select
          className={`form-select custom-select ${props.inputClassName} ${error && touch && 'is-invalid'
            }`}
          {...field}
          {...props}
          onChange={e => {
            field.onChange(e);
            if (props.handleChange) {
              props.handleChange(e);
            }
          }}
        >
          <option value="" disabled>
            {props.placeholder}
          </option>
          {props.data &&
            props.data.map((i, idx) => (
              <option key={idx} value={i.value}>
                {i.label}
              </option>
            ))}
        </select>
        {error && touch && <div className="invalid-feedback">{error}</div>}
      </div>
    </>
  );
};
export const CustomDropdownWithImage = ({ field, form: { touched, errors }, ...props }) => {
  const touch = getIn(touched, field.name);
  const error = getIn(errors, field.name);

  return (
    <>
      <div className={`${props.styleData} space-y-10`} style={props.style}>
        {!props.withOutLabel && (
          <span className="nameInput">
            {props.label}
            {props.requiredField && <span className="mendatory_sign">*</span>}
          </span>
        )}

        <select
          className={`form-select custom-select ${error && touch && 'is-invalid'}`}
          {...field}
          {...props}
          onChange={e => {
            field.onChange(e);
            if (props.handleChange) {
              props.handleChange(e);
            }
          }}
        >
          <option value="Select">Select...</option>
          {props.data &&
            props.data.map((i, idx) => (
              <option
                key={idx}
                value={i.value}
                // eslint-disable-next-line max-len
                data-thumbnail="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/MO-supp-E.svg/600px-MO-supp-E.svg.png"
              >
                {i.label}
              </option>
            ))}
        </select>
        {error && touch && <div className="invalid-feedback">{error}</div>}
      </div>
    </>
  );
};
// export const CustomReactSelect = ({
//   field,
//   options,
//   isMulti = false,
//   form: { touched, errors },
//   ...props
// }) => {
//   const touch = getIn(touched, field.name);
//   const error = getIn(errors, field.name);
//   const { setFieldValue } = useFormikContext();
//   const onChange = option => {
//     setFieldValue(field.name, isMulti ? option.map(item => item.value) : option.value);
//   };

//   const getValue = () => {
//     if (options) {
//       return isMulti
//         ? options.filter(option => field.value.indexOf(option.value) >= 0)
//         : options.find(option => option.value === field.value);
//     }
//     return isMulti ? [] : '';
//   };

//   return (
//     <>
//       <div className={`${props.styleData} space-y-10`} style={props.style}>
//         {!props.withOutLabel && (
//           <span className="nameInput">
//             {props.label}
//             {props.requiredField && <span className="mendatory_sign">*</span>}
//           </span>
//         )}
//         <Select
//           className={` ${error && touch && 'is-invalid'}`}
//           name={field.name}
//           value={getValue()}
//           onChange={onChange}
//           placeholder={props.placeholder}
//           options={options}
//           isMulti={isMulti}
//         />
//         {error && touch && <div className="invalid-feedback">{error}</div>}
//       </div>
//     </>
//   );
// };

export const CustomRadioButton = ({ field, form: { touched, errors }, ...props }) => {
  const touch = getIn(touched, field.name);
  const error = getIn(errors, field.name);
  return (
    <>
      <div className={`${props.styleData} space-y-10`} style={props.style}>
        <div className="d-flex space-x-10 switch_item">
          <label className={`${props.className} d-flex mx-2`}>
            <input
              {...props}
              className={` ${error && touch && 'is-invalid'}`}
              id={props.label}
              {...field}
              onChange={e => {
                props.handleChange(e);
              }}
            />
            <span className="label-span">{props.label}</span>
          </label>
          {/* {!props.withOutLabel && (
            <span className="nameInput">
              {props.label}
              {props.requiredField && <span className="mendatory_sign">*</span>}
            </span>
          )} */}
          {/* <label className="" htmlFor={props.label} /> */}
        </div>
        {error && touch && <div className="invalid-feedback">{error}</div>}
      </div>
    </>
  );
};

export const CustomCheckbox = ({ field, form: { touched, errors }, ...props }) => {
  const touch = getIn(touched, field.name);
  const error = getIn(errors, field.name);
  const { setFieldValue } = useFormikContext();
  return (
    <>
      <div className="cursor-pointer custom-checkbox wrapper justify-content-start">
        <input
          name={props.name}
          id={props.id}
          type="checkbox"
          className={`${error && touch && 'is-invalid'} cp`}
          checked={props.val}
          disabled={props.disabled}
          onChange={() => {
            setFieldValue(field.name, !props.val);
          }}
        />
        <label
          className={`${props.inputClassName} d-flex`}
          htmlFor={props.id}
          style={{ userSelect: 'none' }}
        >
          {props.label}
        </label>
      </div>
      {error && touch && <div className="invalid-feedback d-block mt-0">{error}</div>}
    </>
  );
};

// export const CustomDateInputLog = ({ field, form: { touched, errors }, ...props }) => {
//   const { setFieldValue } = useFormikContext();
//   const touch = getIn(touched, field.name);
//   const error = getIn(errors, field.name);
//   // const handleDate = () => 'dd/MM/yyyy';
//   const handleDatePicker = () => 'dd/MM/yyyy';
//   return (
//     <div className="col-md-3 form-group">
//       <label htmlFor className="small text-secondary fw-600">
//         {props.label}
//       </label>
//       <div className="input-group mb-0">
//         <DatePicker
//           dateFormat={handleDatePicker()}
//           autoComplete="off"
//           className={`form-control shadow-none ${error && touch && 'is-invalid'}`}
//           {...field}
//           {...props}
//           selected={(field.value && new Date(field.value)) || null}
//           onChange={val => setFieldValue(field.name, val)}
//         />
//       </div>
//       {error && touch && <div className="error-message">{error}</div>}
//     </div>
//   );
// };

export const handleDate = () => 'dd/MM/yyyy';

export const handleDatePicker = () => 'dd/MM/yyyy';
