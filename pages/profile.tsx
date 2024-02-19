import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Image from 'next/image';

const Profile = () => {
    const [username, setUsername] = useState('JohnDoe'); // Replace with actual username from user data
    const [profileImageUrl, setProfileImageUrl] = useState('/assets/default-profile.png'); // Replace with actual profile image URL from user data

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handleRemoveProfileImage = () => {
        setProfileImageUrl('/assets/default-profile.png'); // Set to default image or handle removal logic
    };

    return (
        <>
            <Navbar
                breadcrumbs={[
                    { label: 'Dashboard', href: '/dashboard' },
                    { label: 'Profile', href: '/profile' },
                ]}
            />
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">Profile</h1>
                <div className="mb-4">
                    <h2 className="text-xl font-bold">Profile Image</h2>
                    <div className="image-container mb-2">
                        <Image
                            src={profileImageUrl}
                            alt="Profile Image"
                            width={150}
                            height={150}
                            className="object-cover rounded-full"
                        />
                    </div>
                    <button onClick={handleRemoveProfileImage} className="button">Remove Image</button>
                </div>
                <div className="mb-4">
                    <label htmlFor="username" className="block mb-2">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={handleUsernameChange}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                {/* Add more profile fields as needed */}
            </div>
        </>
    );
};

export default Profile;
