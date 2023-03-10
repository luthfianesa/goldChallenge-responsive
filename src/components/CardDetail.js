import "../components/cardDetail.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UsersIcon from "../assets/fi_users.png"

const CardDetail = () => {
  // Ambil id car
  const { id } = useParams();
  const [car, setCar] = useState([]);

  useEffect(() => {
    axios
      .get(`https://bootcamp-rent-cars.herokuapp.com/customer/car/${id}`)
      .then((res) => {
        // console.log(res)
        setCar(res.data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div className="card-detail-outer-container">
      <div className="card-detail-inner-container">
        {Object.entries(car).length ? (
          <div className="card-detail-content">
            <div className="card-img-container">
              <img src={car.image} alt="car"></img>
            </div>
            <div className="card-heading-container">
              <h1>{car.name}</h1>
            </div>
            <div className="card-category-container">
              <div className="category-img"> 
              <img src={UsersIcon}></img>
              </div>
              <div className="category-heading">
                <h1>{car.category}</h1> 
              </div>
            </div>
            <div className="card-billing-container">
              <h1>Total</h1>
            <h1>Rp. {car.price} / Hari</h1>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default CardDetail;

  
