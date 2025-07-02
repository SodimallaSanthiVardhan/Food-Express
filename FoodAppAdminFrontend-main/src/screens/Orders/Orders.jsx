import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { assets } from '../../assets/assets'
import './Orders.css'
import { FaMapMarkerAlt, FaPhone, FaUser } from 'react-icons/fa'

const Orders = ({ url }) => {
  const [orders, setOrders] = useState([])

  const fetchAllOrders = async () => {
    try {
      const res = await axios.get(`${url}/api/order/list`)
      setOrders(res.data.data.reverse()) // newest first
    } catch (error) {
      console.log(error)
    }
  }

  const statusHandle = async (e, orderId) => {
    try {
      await axios.post(`${url}/api/order/status`, {
        orderId,
        status: e.target.value,
      })
      fetchAllOrders()
    } catch (error) {
      console.log(error)
    }
  }

  const markDelivered = async (orderId) => {
    try {
      await axios.post(`${url}/api/order/status`, {
        orderId,
        status: "Delivered",
      })
      fetchAllOrders()
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchAllOrders()
  }, [])

  return (
    <div className="screen order">
      <h3>📋 Orders Overview</h3>
      <div className="order-list">
        {orders.map((order, index) => {
          const date = new Date(order.createdAt).toLocaleString()
          return (
            <div key={index} className="order-item">
              <img src={assets.parcel_icon} alt="parcel" />
              <div>
                <p className="order-item-food">
                  {order.items.map((item, i) =>
                    `${item.name} x ${item.quantity}${i !== order.items.length - 1 ? ', ' : ''}`
                  )}
                </p>
                <p className="order-item-name">
                  <FaUser /> {order.address.first_name} {order.address.last_name}
                </p>
                <div className="order-item-address">
                  <p><FaMapMarkerAlt /> {order.address.street}, {order.address.city}, {order.address.zip_code}</p>
                  <p className="order-item-phone"><FaPhone /> {order.address.phone}</p>
                </div>
                <p><b>Items:</b> {order.items.length}</p>
                <p><b>Price:</b> ₹{order.amount}</p>
                <p><b>Ordered At:</b> {date}</p>

                <div className="order-status">
                  <select
                    onChange={(e) => statusHandle(e, order._id)}
                    value={order.status}
                    className={`status-dropdown ${order.status.replaceAll(' ', '-').toLowerCase()}`}
                  >
                    <option value="Food Processing">Food Processing</option>
                    <option value="Out For Delivery">Out For Delivery</option>
                    <option value="Delivered">Delivered</option>
                  </select>

                  {order.status !== "Delivered" && (
                    <button
                      className="mark-delivered-btn"
                      onClick={() => markDelivered(order._id)}
                    >
                      Mark as Delivered
                    </button>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Orders
