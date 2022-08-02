import { ChangeEvent, useContext, useState } from 'react';
import { Box, Button, TextField } from '@mui/material';

import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { EntriesContext } from '@/context/entries';

const NewEntry = () => {
    const [isFormActivated, setIsFormActivated] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string>('');
    const [inputHasError, setInputHasError] = useState<boolean>(false);

    const { addNewEntry } = useContext(EntriesContext);

    const inputOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const onSave = () => {
        if (!inputValue) {
            setInputHasError(true);
            return;
        }

        addNewEntry(inputValue);
        setInputValue('');
        setIsFormActivated(false);
    };

    return (
        <Box sx={{ marginBottom: 2, paddingX: 2 }}>
            {isFormActivated ? (
                <>
                    <TextField
                        fullWidth
                        sx={{ marginTop: 2, marginBottom: 1 }}
                        placeholder="Agregar una nueva entrada..."
                        autoFocus
                        multiline
                        error={inputHasError}
                        label="Nueva entrada"
                        helperText="Ingrese un valor"
                        onChange={inputOnChange}
                        onFocus={() => setInputHasError(false)}
                    />
                    <Box display="flex" justifyContent="space-between">
                        <Button
                            variant="text"
                            onClick={() => setIsFormActivated(false)}
                        >
                            Cancelar
                        </Button>

                        <Button
                            variant="outlined"
                            color="secondary"
                            endIcon={<SaveOutlinedIcon />}
                            onClick={onSave}
                        >
                            Guardar
                        </Button>
                    </Box>
                </>
            ) : (
                <Button
                    startIcon={<AddCircleOutlineOutlinedIcon />}
                    variant="outlined"
                    fullWidth
                    onClick={() => setIsFormActivated(true)}
                >
                    Agregar Tarea
                </Button>
            )}
        </Box>
    );
};

export default NewEntry;
