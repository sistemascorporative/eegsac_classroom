import React from "react";


const InputField = ({
    id,
    name,
    type,
    placeholder,
    register,
    validation,
    errors
}) => {
  return (
    <div>
      <div className="flex items-center mt-2">
        <input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          className="w-full rounded-md border border-[#e0e0e0] bg-white pl-3 py-3 pr-4 text-gray-400 text-sm outline-none focus:border-azulMedio focus:shadow-md"
          {...register(name, validation)}
        />
      </div>
      {errors[name] && (
        <p className="mt-2 text-xs text-red-500">*El campo {placeholder.toLowerCase()} es requerido</p>
      )}
    </div>
  );
};

const InputFieldLabel = ({
  id,
  name,
  type,
  placeholder,
  register,
  validation,
  errors
}) => {
return (
  <div>
    <label htmlFor={id} className="block text-[16px] text-gray-500">
      {placeholder}
    </label>
    <div className="flex items-center mt-2">
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-md border border-[#e0e0e0] bg-white pl-3 py-3 pr-4 text-gray-400 text-sm outline-none focus:border-azulMedio focus:shadow-md"
        {...register(name, validation)}
      />
    </div>
    {errors[name] && (
      <p className="mt-2 text-xs text-red-500">*El campo {placeholder.toLowerCase()} es requerido</p>
    )}
  </div>
);
};

const InputFieldIcon = ({
    id,
    name,
    type,
    placeholder,
    icon: Icon,
    register,
    validation,
    errors
}) => {
  return (
    <div>
      <label htmlFor={id} className="block text-[16px] text-gray-500">
        {placeholder} :
      </label>
      <div className="flex items-center mt-2">
        {Icon && <Icon className="absolute ml-3" style={{ color: "var(--primary)", width: 20, height: 20 }} />}
        <input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          className="w-full rounded-md border border-[#e0e0e0] bg-white pl-12 py-3 pr-4 text-gray-400 text-sm outline-none focus:border-azulMedio focus:shadow-md"
          {...register(name, validation)}
        />
      </div>
      {errors[name] && (
        <p className="mt-2 text-xs text-red-500">*El campo {placeholder.toLowerCase()} es requerido</p>
      )}
    </div>
  );
};

export { InputField, InputFieldLabel, InputFieldIcon };
