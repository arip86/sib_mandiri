import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"


function EditPersonel(){

    const {id} = useParams();
    const [formData, setFormData] = useState({
        nama: '',
        nrp: '',
        alamat: '',
        agama_id: '',
        kesatuan_id: ''
    });
    const [error, setError] = useState(null);

    useEffect(()=>{
        const fetchEditPersonel = async () =>{
            try{
            const response = await axios.get(`http://localhost:8000/api/personel/edit/${id}`, {

            });
            const result = await response.json();
            if(result.success){
                setFormData(prev => ({...prev, ...result.data[0] || ''}));
            } else {
                setError('failed to Fetch ');
            }
        } catch{
            setError('Api gagal diakses')            
        }
    };
    fetchEditPersonel();
    }, [id]);
    return(
        <div className="container-fluid px-4">
        <h2 style={{textAlign: 'center'}}>Edit Data Personel</h2>
        {/* {error && <div className="error">{error}</div>} */}
        <form> 
          <div className="form-group row">
            <label htmlFor="text" className="col-4 col-form-label">Nama</label> 
            <div className="col-8">
              <input id="text" name="nama" 
              type="text" className="form-control"
              value=""
              onChange=""
              required
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="text1" className="col-4 col-form-label">NRP</label> 
            <div className="col-8">
              <input id="text1" name="nrp" 
              type="text" className="form-control"
              value=""
              onChange=""
              required
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="text2" className="col-4 col-form-label">Alamat</label> 
            <div className="col-8">
              <input id="text2" name="alamat" 
              type="text" className="form-control"
              value=""
              onChange=""
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="select" className="col-4 col-form-label">Agama</label> 
            <div className="col-8">
              <select id="select" name="agama_id" 
              className="custom-select"
              value=""
              onChange=""
              >
                <option value="">Pilih Agama</option>
                {/* {agama.map(ag => (
                <option key={ag.id} value={ag.id}>{ag.agama}</option>
                ))} */}
              </select>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="select1" className="col-4 col-form-label">Kesatuan</label> 
            <div className="col-8">
              <select id="select1" name="kesatuan_id" 
              value=""
              onChange=""
              className="custom-select">
                <option value="">Pilih Kesatuan</option>
                {/* {kesatuan.map(kes => (
                <option key={kes.id} value={kes.id}>{kes.kesatuan}</option>
                ))} */}
              </select>
            </div>
          </div> 
          <div className="form-group row">
            <div className="offset-4 col-8">
              <button name="submit" type="submit" className="btn btn-primary">Submit</button>
            </div>
          </div>
        </form>
        </div>
    )
}

export default EditPersonel