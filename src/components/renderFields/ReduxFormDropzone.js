import React from 'react';
import Dropzone from 'react-dropzone';

const ReduxFormDropzone = (field) => {
  const files = field.input.value;
  return (
    <div style={{marginTop:"15px"}}>
      <Dropzone
        name={field.name}
        onDrop={(filesToUpload, e) => field.input.onChange(filesToUpload)}
      >
        <div>Try dropping some files here, or click to select files to upload.</div>
      </Dropzone>
      {field.meta.touched &&
      field.meta.error &&
      <span className="error">{field.meta.error}</span>}
      {files && Array.isArray(files) && (
        <ul>
          { files.map((file, i) => <li key={i}>{file.name}</li>) }
        </ul>
      )}
    </div>
  );
}

export default ReduxFormDropzone;
