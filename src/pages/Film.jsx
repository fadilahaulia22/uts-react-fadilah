import { useState, useEffect } from "react";
import { Trash, SquarePen, Plus, Search, Info, Heart } from "lucide-react";
import "../index.css";

let film = [
  {
    id: 1,
    name: "Frozen II",
    genre : "Animasi",
    tahun : 2024,
    durasi : 90,
    sinopsis : "Anna, Elsa, Kristoff, Olaf dan Sven pergi meninggalkan Arendelle untuk melakukan perjalanan ke sebuah tempat asing dan penuh keajaiban. Mereka berangkat untuk menemukan asal usul kekuatan Elsa dan juga untuk menyelamatkan kerajaan mereka. Kali ini akan ada teks lirik lagu sehingga penonton bisa ikut bernyanyi bersama karakter Frozen II favorit mereka.",
    image:
      "https://i.pinimg.com/564x/e0/f7/dc/e0f7dcc1f0a9657da69ab63c598624eb.jpg",
  },
  {
    id: 2,
    name: "Harry Potter",
    genre : "Fantasi",
    tahun : 2024,
    durasi : 80,
    sinopsis : "Inti cerita dalam novel-novel ini berpusat pada upaya Harry untuk mengalahkan penyihir hitam jahat bernama Lord Voldemort, yang berambisi untuk menjadi makhluk abadi, menaklukkan dunia sihir, menguasai orang-orang nonpenyihir, dan membinasakan siapapun yang menghalangi jalannya, terutama Harry Potter.",
    image:
      "https://i.pinimg.com/564x/2b/14/da/2b14da6668dcc8e6456ab0ce9bcf1a5d.jpg",
  },
  {
    id: 3,
    name: "Moana",
    genre : "Kartun",
    tahun : 2024,
    durasi : 60,
    sinopsis : "Moana memulai petualangan berlayar dengan perahu untuk meyakinkan Maui, si sosok setengah-dewa, agar mengembalikan hati sang dewi, Te Fitti, setelah panen gagal dan ikan-ikan di pulaunya mulai mati.",
    image:
      "https://i.pinimg.com/564x/78/f0/2e/78f02e6a0ae0e2e86316224de52cd8df.jpg",
  },
  {
    id: 4,
    name: "Titanic",
    genre : "Pertarungan",
    tahun : 2024,
    durasi : 130,
    sinopsis : "Rayakan peringatan 25 tahun sebuah kisah cinta yang abadi. Cerita fiksi tentang tenggelamnya kapal Titanic, Jack Dawson (Leonardo DiCaprio) dan Rose DeWitt Bukater (Kate Winslet) penumpang dari golongan sosial berbeda jatuh cinta selama pelayaran perdana di kapal impian yang berakhir tragis.",
    image:
      "https://i.pinimg.com/564x/88/80/b6/8880b6d5f3517441316b1284f5921b10.jpg",
  },
  {
    id: 5,
    name: "Tangled",
    genre : "Kartun",
    tahun : 2024,
    durasi : 100,
    sinopsis : "Rapunzel, gadis muda nan lugu, dikurung ibunya yang sangat protektif di atas menara. Harapannya untuk kabur dan melihat dunia luar menjadi kenyataan saat seorang pencuri baik hati memanjat menaranya.",
    image:
      "https://i.pinimg.com/564x/4a/c1/60/4ac1603157230f9a3622e388bf997b34.jpg",
  },
];


const saveFilm = localStorage.getItem("view");

export default function Home() {
  const [view, setview] = useState(
    saveFilm ? JSON.parse(saveFilm) : film
  );
  const [updateProduct, setUpdateProduct] = useState(null);
  const [addProduct, setAddProduct] = useState(null);
  const [orderBy, setOrderBy] = useState("asc");
  const [sortBy, setSortBy] = useState("id");
  const [search, setSearch] = useState("");
  const [likedFilms, setLikedFilms] = useState(new Set());
  const [filterGenre, setFilterGenre] = useState('All');


  const filterData = view
    .sort((a, b) => {
      if (orderBy === "asc") {
        return a[sortBy] < b[sortBy] ? -1 : 1;
      } else {
        return a[sortBy] > b[sortBy] ? -1 : 1;
      }
    })
    .filter((item) => {
      return (
        item.name.toLowerCase().includes(search.toLowerCase()) &&
        (filterGenre === "All" || item.genre === filterGenre)
      );
    });
    

  function handleDelete(product) {
    if (window.confirm("Apakah kamu yakin hapus ini?")) {
      setview(view.filter((p) => p.id !== product.id));
    }
  }

  function handleUpdate() {
    setview(
      view.map((a) => (a.id === updateProduct.id ? updateProduct : a))
    );
    setUpdateProduct(null);
  }

  function handleInfo(product) {
    console.log(product);
    alert(`Title : ${product.name}\nGenre : ${product.genre}\nDurasi : ${product.durasi} menit\nSinopsis : ${product.sinopsis}`);
  }

  function handleAddProduct() {
    const newId =
      view.length > 0 ? Math.max(...view.map((p) => p.id)) + 1 : 1;
    setview([...view, { ...addProduct, id: newId }]);
    setAddProduct(null); //
  }

  function toggleLike(productId) {
    setLikedFilms((prevLikedFilms) => {
      const newLikedFilms = new Set(prevLikedFilms);
      if (newLikedFilms.has(productId)) {
        newLikedFilms.delete(productId);
      } else {
        newLikedFilms.add(productId);
      }
      return newLikedFilms;
    });
  }

  const handleFilterChange = (e) => {
    setFilterGenre(e.target.value);
  };

  useEffect(() => {
    localStorage.setItem("view", JSON.stringify(view));
  });

  const filteredProducts = filterGenre === 'All' ? view : view.filter((product) => product.genre === filterGenre);


  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between bg-white p-4 rounded shadow mb-6">
        <div className="flex items-center mb-4 md:mb-0">
          <button
            className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded shadow"
            onClick={() => setAddProduct({ name: "", tahun: 0, genre:"", durasi: 0, sinopsis:"", image: "" })}
          >
            <Plus />
            <span>Add</span>
          </button>
        </div>
        <div className="flex items-center gap-2 bg-slate-300 p-2 rounded shadow">
          <Search />
          <input
            type="text"
            className="bg-transparent flex-1 p-2 outline-none"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-4 mt-4 md:mt-0">
        <label className="flex items-center gap-2">
            <span className="text-gray-600">Genre:</span>
            <select
              onChange={handleFilterChange}
              value={filterGenre}
              className="bg-white border border-gray-300 rounded py-2 px-4 text-gray-700"
            >
              <option value="All">Semua</option>
              <option value="Kartun">Kartun</option>
              <option value="Fantasi">Fantasi</option>
              <option value="Pertarungan">Pertarungan</option>
              <option value="Animasi">Animasi</option>
            </select>
          </label>

          <label className="flex items-center gap-2">
            <span className="text-gray-600">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-300 p-2 rounded"
            >
              <option value="id">Normal</option>
              <option value="name">Name</option>
              <option value="tahun">Tahun</option>
            </select>
          </label>
          <label className="flex items-center gap-2">
            <span className="text-gray-600">Order:</span>
            <select
              value={orderBy}
              onChange={(e) => setOrderBy(e.target.value)}
              className="border border-gray-300 p-2 rounded"
            >
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </label>
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-6">
        {filterData.length > 0 ? (
          filterData.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded shadow w-60">
              <p className="text-lg font-bold">{product.name}</p>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover mb-4 rounded"
              />
              <p className="text-gray-600">Tahun {product.tahun}</p>
              <div className="flex justify-end gap-2 mt-4">
                <button
                  onClick={() => handleInfo(product)}
                  className="text-red-500 hover:text-blue-700"
                >
                  <Info />
                </button>
                <button
                  onClick={() => handleDelete(product)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash />
                </button>
                <button
                  onClick={() => setUpdateProduct(product)}
                  className="text-blue-500 hover:text-blue-700"
                >
                  <SquarePen />
                </button>

                <button
                  onClick={() => toggleLike(product.id)}
                  className={`${
                    likedFilms.has(product.id) ? "bg-red-500" : "bg-white-500"
                  }`}
                >
                  <Heart />
                </button>

              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-xl">Tidak tersedia</p>
        )}
      </div>
      {updateProduct && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 w-1/4 rounded shadow">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleUpdate();
              }}
            >
              <label className="block mb-2">Judul :</label>
              <input
                type="text"
                value={updateProduct.name}
                onChange={(e) =>
                  setUpdateProduct({ ...updateProduct, name: e.target.value })
                }
                className="border border-gray-300 p-2 mb-4 w-full rounded"
              />
              <label className="block mb-2">Genre :</label>
              <input
                type="text"
                value={updateProduct.genre}
                onChange={(e) =>
                  setUpdateProduct({ ...updateProduct, genre: e.target.value })
                }
                className="border border-gray-300 p-2 mb-4 w-full rounded"
              />
              <label className="block mb-2">Sinopsis :</label>
              <input
                type="text"
                value={updateProduct.sinopsis}
                onChange={(e) =>
                  setUpdateProduct({ ...updateProduct, sinopsis: e.target.value })
                }
                className="border border-gray-300 p-2 mb-4 w-full rounded"
              />
              <label className="block mb-2">Tahun:</label>
              <input
                type="number"
                value={updateProduct.tahun}
                onChange={(e) =>
                  setUpdateProduct({
                    ...updateProduct,
                    tahun: parseInt(e.target.value),
                  })
                }
                className="border border-gray-300 p-2 mb-4 w-full rounded"
              />
              <label className="block mb-2">Durasi:</label>
              <input
                type="number"
                value={updateProduct.durasi}
                onChange={(e) =>
                  setUpdateProduct({
                    ...updateProduct,
                    durasi: parseInt(e.target.value),
                  })
                }
                className="border border-gray-300 p-2 mb-4 w-full rounded"
              />
              <label className="block mb-2">Image URL:</label>
              <input
                type="text"
                value={updateProduct.image}
                onChange={(e) =>
                  setUpdateProduct({
                    ...updateProduct,
                    image: e.target.value,
                  })
                }
                className="border border-gray-300 p-2 mb-4 w-full rounded"
              />
              <div className="flex justify-end gap-2">
                <button
                  type="submit"
                  className="bg-blue-500 text-white p-2 rounded"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setUpdateProduct(null)}
                  className="bg-gray-500 text-white p-2 rounded"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {addProduct && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 w-1/4 rounded shadow">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleAddProduct();
              }}
            >
              <label className="block mb-2">Judul :</label>
              <input
                type="text"
                value={addProduct.name}
                onChange={(e) =>
                  setAddProduct({ ...addProduct, name: e.target.value })
                }
                className="border border-gray-300 p-2 mb-4 w-full rounded"
              />
              <label className="block mb-2">Tahun:</label>
              <input
                type="number"
                value={addProduct.tahun}
                onChange={(e) =>
                  setAddProduct({
                    ...addProduct,
                    tahun: parseInt(e.target.value),
                  })
                }
                className="border border-gray-300 p-2 mb-4 w-full rounded"
              />
              <label className="block mb-2">Durasi:</label>
              <input
                type="number"
                value={addProduct.durasi}
                onChange={(e) =>
                  setAddProduct({
                    ...addProduct,
                    durasi: parseInt(e.target.value),
                  })
                }
                className="border border-gray-300 p-2 mb-4 w-full rounded"
              />
              <label className="block mb-2">Genre : </label>
              <input
                type="text"
                value={addProduct.genre}
                onChange={(e) =>
                  setAddProduct({ ...addProduct, genre: e.target.value })
                }
                className="border border-gray-300 p-2 mb-4 w-full rounded"
              />
              <label className="block mb-2">Sinopsis : </label>
              <input
                type="text"
                value={addProduct.sinopsis}
                onChange={(e) =>
                  setAddProduct({ ...addProduct, sinopsis: e.target.value })
                }
                className="border border-gray-300 p-2 mb-4 w-full rounded"
              />
              <label className="block mb-2">Image URL:</label>
              <input
                type="text"
                value={addProduct.image}
                onChange={(e) =>
                  setAddProduct({
                    ...addProduct,
                    image: e.target.value,
                  })
                }
                className="border border-gray-300 p-2 mb-4 w-full rounded"
              />
              <div className="flex justify-end gap-2">
                <button
                  type="submit"
                  className="bg-blue-500 text-white p-2 rounded"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setAddProduct(null)}
                  className="bg-gray-500 text-white p-2 rounded"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

 

