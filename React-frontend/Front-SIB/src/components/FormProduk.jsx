import { useState } from "react"
import styles from '../assets/css/FormProduk.module.css';

function FormProduk({onAddProduk}){
    //ini contoh satu useState satu Inputan
//    const [title, setTitle] = useState("");
//    const [date, setDate] = useState("")
//contoh satu useState ke beberapa inputan sekaligus
const [formData, setFormData] = useState({
nama: "",
tahun: "",
harga: "",
gambar: "",
});
//contoh satu handleChange satu inputan
//    function handleTitle (e){
//     setTitle(e.target.value);
//    }
//    function handleDate(e){
//     setDate(e.target.value)
//    }
const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prevData) => ({
        ...prevData, 
        [name]: value
    }));
};
const handleSubmit = (e) =>{
    e.preventDefault();

    //validasi
    if(formData.nama && formData.tahun && formData.harga){
        onAddProduk(formData);
        setFormData({nama: "", tahun: "", harga: "", gambar: ""});
    } else {
        alert("mohon isi semua kolom");
    }
}
   
    return(
        <div className={styles.produkContainer}>
            <h1 className={styles.title}>Form Tambah Produk</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
        <label htmlFor="nama">Nama Produk</label>
        <input 
        id="nama"
        name="nama"
        type="text"
        value={formData.nama}
        //event onChange untuk membantu interaksi ketika user mengetikkan sesuatu didalam input
        onChange={handleChange}
        />
            </div>
        <div className={styles.formGroup}>
        <label htmlFor="nama">Tahun</label>
        <input 
        id="nama"
        name="tahun"
        type="numeric"
        value={formData.tahun}
        onChange={handleChange}
        
        //event onChange untuk membantu interaksi ketika user mengetikkan sesuatu didalam input
        />
            </div>

        <div className={styles.formGroup}>
        <label htmlFor="nama">Harga</label>
        <input 
        id="nama"
        type="text"
        name="harga"
        onChange={handleChange}
        value={formData.harga}
        //event onChange untuk membantu interaksi ketika user mengetikkan sesuatu didalam input
        />
            </div>
            <div className={styles.formGroup}>
        <label htmlFor="nama">URL Gambar</label>
        <input 
        id="nama"
        name="gambar"
        type="text"
        value={formData.gambar}
        onChange={handleChange}
        //event onChange untuk membantu interaksi ketika user mengetikkan sesuatu didalam input   
        />
            </div>
            <button type="submit" className={styles.submitButton}>
                Tambah Produk
            </button>
        </form>
        </div>
    )
}

export default FormProduk;