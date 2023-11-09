import React from 'react';
// Import React FilePond
import { FilePond, registerPlugin } from 'react-filepond';
// Import FilePond styles
import 'filepond/dist/filepond.min.css';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import '../../App.css'

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

function AddPhoto(props) {
    const { photo, setPhoto } = props;

    const handlePhoto = (files) => {
        setPhoto(files);
    }

    return (
        <div className='zoomout'>
            <React.Fragment>
                <h2 className='position'>Add photos of the flat and room</h2 >
                <div >
                    <FilePond
                        files={photo}
                        onupdatefiles={handlePhoto}
                        allowMultiple={false}
                        maxFiles={3}
                        name="files"
                        className="filepond filepond-input-multiple"
                    />
                </div>
            </React.Fragment >
        </div >
    )
}
export default AddPhoto