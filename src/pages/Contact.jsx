export default function Contact() {
    return (
      <div className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full">
          <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Nama
              </label>
              <input
                type="text"
                id="name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value="Fadilah"
                readOnly
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="birthplace">
                Tempat, Tanggal Lahir
              </label>
              <input
                type="text"
                id="birthplace"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value="Tempat, Tanggal Lahir"
                readOnly
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="training">
                Pelatihan
              </label>
              <input
                type="text"
                id="training"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value="React"
                readOnly
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="instructor">
                Nama Instruktur
              </label>
              <input
                type="text"
                id="instructor"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value="Riri"
                readOnly
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
  