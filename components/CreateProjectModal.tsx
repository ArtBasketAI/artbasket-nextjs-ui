import { useState } from 'react';
import { useRouter } from 'next/router';

const CreateProjectModal = ({ isOpen, onClose }) => {
    const [step, setStep] = useState(1);
    const [projectTitle, setProjectTitle] = useState('');
    const [projectType, setProjectType] = useState('');
    const router = useRouter();

    if (!isOpen) return null;

    const handleCreateProject = () => {
        onClose(); // Close the modal
        router.push(`/create/${projectType}`); // Redirect to the specific creation page
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg w-1/2 h-3/4 overflow-auto">
                <h2 className="text-2xl font-bold text-center mb-4">Let's Create Something Amazing!</h2>
                {step === 1 && (
                    <div className="text-center">
                        <img
                            src="/assets/abdalle.png" // Replace with the path to your image
                            alt="Exciting project"
                            className="w-full h-64 object-cover mb-4"
                        />
                        <label htmlFor="projectTitle" className="block mb-2">Project Title:</label>
                        <input
                            type="text"
                            id="projectTitle"
                            value={projectTitle}
                            onChange={(e) => setProjectTitle(e.target.value)}
                            className="mb-4 p-2 w-full border border-gray-300 rounded"
                        />
                        <button onClick={() => setStep(2)} className="bg-blue-500 text-white p-2 rounded">Next</button>
                    </div>
                )}
                {step === 2 && (
                    <div className="text-center">
                        <label className="block mb-2">Project Type:</label>
                        <div className="flex justify-center space-x-4 mb-4">
                            <div
                                onClick={() => setProjectType('story')}
                                className={`cursor-pointer p-2 rounded border-2 ${projectType === 'story' ? 'border-blue-700' : 'border-gray-300'}`}
                            >
                                <img
                                    src="/assets/story.png"
                                    alt="Begin a Story"
                                    className={`w-24 h-24 object-cover ${projectType === 'story' ? '' : 'grayscale'}`}
                                />
                            </div>
                            <div
                                onClick={() => setProjectType('comic')}
                                className={`cursor-pointer p-2 rounded border-2 ${projectType === 'comic' ? 'border-blue-700' : 'border-gray-300'}`}
                            >
                                <img
                                    src="/assets/manga.webp"
                                    alt="Begin a Comic"
                                    className={`w-24 h-24 object-cover ${projectType === 'comic' ? '' : 'grayscale'}`}
                                />
                            </div>
                            <div
                                onClick={() => setProjectType('video')}
                                className={`cursor-pointer p-2 rounded border-2 ${projectType === 'video' ? 'border-blue-700' : 'border-gray-300'}`}
                            >
                                <img
                                    src="/assets/video.webp"
                                    alt="Begin a Video Clips"
                                    className={`w-24 h-24 object-cover ${projectType === 'video' ? '' : 'grayscale'}`}
                                />
                            </div>
                        </div>
                        <button onClick={handleCreateProject} className="bg-green-500 text-white p-2 rounded">Create</button>
                        <button onClick={() => setStep(1)} className="bg-gray-300 text-black p-2 rounded ml-2">Back</button>
                    </div>
                )}


                <button onClick={onClose} className="absolute top-4 right-4 bg-red-500 text-white p-2 rounded">Close</button>
            </div>
        </div>
    );
};

export default CreateProjectModal;