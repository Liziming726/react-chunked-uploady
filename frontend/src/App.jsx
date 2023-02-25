import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import UploadButton from "@rpldy/upload-button";
import ChunkedUploady from "@rpldy/uploady";

function App() {

  return (
    <div className="App">
      <ChunkedUploady
        chunkSize={5120000}
        multiple
        grouped
        maxGroupSize={2}
        method="PUT"
        destination={{
          url: "http://localhost:3000/fileUpload", headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, Authorization, Content-Length, X-Requested-With"
          }
        }}>
        <UploadButton />
      </ChunkedUploady>
    </div>
  )
}

export default App
