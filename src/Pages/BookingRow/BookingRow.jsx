import PropTypes from "prop-types";


const BookingRow = ({ booking, handleDelete, handleBoookingConfirm }) => {

    const { _id, date, img, price, service, status } = booking;

    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-outline btn-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={img} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
            </td>
            <td>{service}</td>
            <td>{date}</td>
            <td>${price}</td>
            <th>
                {
                    status === "confirm" ? <span className="font-bold text-primary">Confirmed</span> :
                        <button onClick={() => handleBoookingConfirm(_id)} className="btn btn-ghost btn-xs bg-green-500">Please Confirm</button>
                }
            </th>
        </tr>
    );
};

export default BookingRow;

BookingRow.propTypes = {
    booking: PropTypes.object,
    handleDelete: PropTypes.func,
    handleBoookingConfirm: PropTypes.func,
}