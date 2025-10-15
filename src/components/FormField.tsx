import React from "react";
import { TextField, InputAdornment } from "@mui/material";


interface FormFieldProps {
    sx?: object,
    label?: string,
    type?: string,
    required?: boolean
}

const FormField: React.FC<FormFieldProps> = ({ sx, label, type, required }) => {
    return(
            <TextField variant="outlined" sx={{ margin:1, width:"80%", ...sx }}
                label={label}
                type={type} 
                required={required}
            />
    );
}

export default FormField;