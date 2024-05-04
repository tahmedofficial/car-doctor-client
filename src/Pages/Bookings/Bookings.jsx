import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import BookingRow from "../BookingRow/BookingRow";
import axios from "axios";


const Bookings = () => {

    const { user, sweetAlert } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const [reload, setReload] = useState(true);
    console.log(bookings);

    const url = `http://localhost:5000/bookings?email=${user?.email}`;
    useEffect(() => {
        axios.get(url, { withCredentials: true })
            .then(res => {
                setBookings(res.data);
            })

        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => {
        //         setBookings(data);
        //     })
    }, [url, reload])


    const handleDelete = id => {
        const proceed = confirm("Are You sure you want to delete")
        if (proceed) {
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(date => {
                    console.log(date);
                    if (date.deletedCount > 0) {
                        sweetAlert("Successfully delete")
                        setReload(!reload)
                    }
                })
        }
    }

    const handleBoookingConfirm = id => {
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ status: "confirm" })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    sweetAlert("Updated Successfully")
                    setReload(!reload)
                }
            })
    }


    return (
        <div>
            <h3>Bookings{bookings.length}</h3>
            <div className="overflow-x-auto">

                <table className="table">
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Service</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            bookings.map(booking => <BookingRow
                                key={booking._id}
                                booking={booking}
                                handleDelete={handleDelete}
                                handleBoookingConfirm={handleBoookingConfirm}></BookingRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;