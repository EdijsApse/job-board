import { useEffect } from "react";
import { useCallback } from "react";
import { useReducer, useRef } from "react";
import imagePlaceholder from "../assets/test-logo.png";

const SET_FILE_SELECTED = "SET_FILE_SELECTED";
const RESET_FILE_INPUT_STATE = "RESET_FILE_INPUT_STATE";

const initialState = {
    selectedImage: "",
    canRemoveSelectedImage: false,
    file: null,
};

const fileInputReducer = (state, action) => {
    const { type } = action;

    if (type === SET_FILE_SELECTED) {
        return {
            ...state,
            canRemoveSelectedImage: true,
            selectedImage: action.selectedImage,
            file: action.file,
        };
    }

    if (type === RESET_FILE_INPUT_STATE) {
        return initialState;
    }
    return initialState;
};

const ImagePicker = ({
    labelText,
    existingImage,
    errorMessage,
    onFileSelected,
    onFileRemoved,
}) => {
    const fileSelectRef = useRef();
    const browseFileHandler = () => {
        fileSelectRef.current.click();
    };

    const [fileInputState, dispatch] = useReducer(
        fileInputReducer,
        initialState
    );

    const fileSelectedHandler = (e) => {
        const file = e.target.files[0];
        if (!file) {
            return;
        }
        const fileReader = new FileReader();

        fileReader.onload = (e) => {
            dispatch({
                type: SET_FILE_SELECTED,
                selectedImage: e.target.result,
                file: file,
            });
            onFileSelected(file);
        };

        fileReader.readAsDataURL(file);
    };

    const onRemoveHandler = () => {
        dispatch({
            type: RESET_FILE_INPUT_STATE,
        });
        onFileRemoved();
        fileSelectRef.current.value = null;
    };

    let imgSrc = imagePlaceholder;

    if (fileInputState.selectedImage) {
        imgSrc = fileInputState.selectedImage;
    } else if (existingImage) {
        imgSrc = existingImage;
    }

    useEffect(() => {
        dispatch({ type: RESET_FILE_INPUT_STATE });
    }, [existingImage, dispatch]);

    return (
        <div className="image-input-wrapper">
            <label>{labelText}</label>
            <div className="image-input">
                <div className="image">
                    {fileInputState.canRemoveSelectedImage && (
                        <span className="remove-btn" onClick={onRemoveHandler}>
                            <i className="fa-solid fa-xmark"></i>
                        </span>
                    )}
                    <img src={imgSrc} alt={labelText} />
                </div>
                <div className="browse-button">
                    <input
                        type="file"
                        accept="image/png, image/jpeg"
                        ref={fileSelectRef}
                        onChange={fileSelectedHandler}
                    />
                    <button
                        className="btn btn-secondary"
                        type="button"
                        onClick={browseFileHandler}
                    >
                        Browse
                    </button>
                </div>
            </div>
            {errorMessage && <p className="input-error">{errorMessage}</p>}
        </div>
    );
};

export default ImagePicker;
