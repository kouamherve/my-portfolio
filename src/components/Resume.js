import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import { useState } from "react";

export default function Resume() {
  const [showDocViewer, setShowDocViewer] = useState(false);

  const docs = [
    {
      uri: require("../files/vr.txt"),
      fileType: "txt",
      fileName: "vr.txt",
    },
  ];
  const getMyResume = (event) => {
    event.preventDefault();
    setShowDocViewer(true);
  };

  return (
    <div className="flex items-center justify-center mt-20 bg-resume-img bg-cover bg-center bg-black/75 bg-blend-darken h-[270px] bg-fixed overflow-x-hidden">
      <div className=" text-white  ">
        <h1 className=" text-xl uppercase tracking-wider md:text-3xl">
          Check out my résumé!
        </h1>
        <form onSubmit={getMyResume}>
          <button
            type="submit"
            className=" bg-transparent hover:bg-gray-600/50 border-2 border-white px-6 hover:px-8 py-2.5 mt-6 capitalize text-sm font-thin md:text-md "
          >
            Grab a copy
          </button>
        </form>
      </div>
      {showDocViewer && (
        <DocViewer
          documents={docs}
          onClose={() => setShowDocViewer(false)}
          pluginRenderers={DocViewerRenderers}
          className=" h-96"
        />
      )}
    </div>
  );
}
