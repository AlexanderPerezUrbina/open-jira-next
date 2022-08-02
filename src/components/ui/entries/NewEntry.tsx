import { ChangeEvent, useContext, useState } from 'react';
import { Box, Button, TextField } from '@mui/material';

import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { EntriesContext } from '@/context/entries';
import { UIContext } from '@/context/ui';

const NewEntry = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const [inputHasError, setInputHasError] = useState<boolean>(false);

    const { addNewEntry } = useContext(EntriesContext);
    const { setIsNewEntryFormActivated, isNewEntryFormActivated } =
        useContext(UIContext);

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
        setIsNewEntryFormActivated(false);
    };

    return (
        <Box sx={{ marginBottom: 2, paddingX: 2 }}>
            {isNewEntryFormActivated ? (
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
                            onClick={() => setIsNewEntryFormActivated(false)}
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
                    onClick={() => setIsNewEntryFormActivated(true)}
                >
                    Agregar Tarea
                </Button>
            )}
        </Box>
    );
};

export default NewEntry;
