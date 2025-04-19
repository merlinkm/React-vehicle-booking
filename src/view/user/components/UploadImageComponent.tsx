import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function UploadImageComponent() {
    const [previewImages, setPreviewImages] = useState<string[]>([]);


    const onFileSelected = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files

        if (!files) return;

        const urls = Array.from(files).map((file) => URL.createObjectURL(file));
        setPreviewImages((prev) => [...prev, ...urls]);


        console.log(files);

    }

    const onImageRemove = (image: string, index: number) => {
        const result = previewImages.filter((item) => item != image);
        setPreviewImages(result)
    }
    return (
        <div>
            <h2 className="font-medium text-xl my-3">Upload Car Images</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
                {previewImages.map((image, index) => (
                    <div key={index}>
                        <FontAwesomeIcon icon={faCircleXmark}
                            className="absolute m-2 text-lg text-white"
                            onClick={() => onImageRemove(image, index)}
                        />
                        <img src={image} alt="car image" className="w-full h-[130px] object-cover rounded-xl" />
                    </div>
                ))}
                <label htmlFor="upload-images">
                    <div className="border rounded-xl border-dotted border-blue-500 bg-blue-100 p-10
                cursor-pointer hover:shadow-md">
                        <h2 className="text-lg text-center text-blue-500">+</h2>
                    </div>
                </label>
                <input type="file" multiple id="upload-images"
                    onChange={onFileSelected}
                    className="hidden" />
            </div>
        </div>
    )
}

export default UploadImageComponent