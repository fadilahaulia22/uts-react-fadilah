import React from 'react';

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-100">
            {/* Banner */}
            <div className="bg-cover bg-center h-64" style={{ backgroundImage: "url('https://example.com/banner-image.jpg')" }}>
                <div className="bg-black bg-opacity-50 h-full flex items-center justify-center">
                    <h1 className="text-white text-4xl font-bold">Welcome to Film Haven</h1>
                </div>
            </div>

            {/* Categories */}
            <div className="py-10">
                <h2 className="text-2xl font-bold text-center mb-6">Browse by Category</h2>
                <div className="flex justify-center space-x-4">
                    <div className="bg-white shadow rounded-lg overflow-hidden w-40">
                        <img src="https://i.pinimg.com/564x/fb/8c/41/fb8c4189e5acb804d7ae80b853a2aa06.jpg" alt="Action" className="w-full h-32 object-cover" />
                        <div className="p-4 text-center">
                            <h3 className="text-lg font-semibold">Action</h3>
                        </div>
                    </div>
                    <div className="bg-white shadow rounded-lg overflow-hidden w-40">
                        <img src="https://i.pinimg.com/564x/16/9b/78/169b7883d818b7e8f2e89e8d59a36e77.jpg" alt="Drama" className="w-full h-32 object-cover" />
                        <div className="p-4 text-center">
                            <h3 className="text-lg font-semibold">Drama</h3>
                        </div>
                    </div>
                    <div className="bg-white shadow rounded-lg overflow-hidden w-40">
                        <img src="https://i.pinimg.com/736x/8b/dc/5e/8bdc5e6485c9d24fafd68105cd63a1f9.jpg" alt="Comedy" className="w-full h-32 object-cover" />
                        <div className="p-4 text-center">
                            <h3 className="text-lg font-semibold">Comedy</h3>
                        </div>
                    </div>
                </div>
            </div>

            {/* Promotions */}
            <div className="bg-gray-200 py-10">
                <h2 className="text-2xl font-bold text-center mb-6">Special Promotions</h2>
                <div className="flex justify-center space-x-4">
                    <div className="bg-white shadow rounded-lg overflow-hidden w-60">
                        <img src="https://i.pinimg.com/736x/9d/98/95/9d9895349b86c6e659867f328335b206.jpg" alt="Promo 1" className="w-full h-40 object-cover" />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold">Summer Blockbusters</h3>
                            <p className="text-gray-600">Catch the latest summer hits now!</p>
                        </div>
                    </div>
                    <div className="bg-white shadow rounded-lg overflow-hidden w-60">
                        <img src="https://i.pinimg.com/736x/e4/46/5c/e4465c0fe3bc3ece727a26f7a3f57e35.jpg" alt="Promo 2" className="w-full h-40 object-cover" />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold">Award-Winning Films</h3>
                            <p className="text-gray-600">Watch critically acclaimed movies.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
