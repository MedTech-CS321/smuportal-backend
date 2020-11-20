const BookReservation = require("../models/reservationBook");
const mongoose = require("mongoose");

function bookReservationService(){

    async function reserveBook(user,startDay,endDay,ISBN){
        let booking = new BookReservation({
            user,
            startDay,
            endDay,
            ISBN
          });
          await booking
            .save()
            .then(async docs => {
              await BookReservation.updateOne(
                { _id: mongoose.Types.ObjectId(ISBN) },
                { $push: { bookings: docs } }
              );
            })
            .catch(err => {
              throw err;
            });
    }
    /* async function getBookings(ISBN,startDay) {
            return Book.find({ _id: mongoose.Types.ObjectId(ISBN) })
              .select("Title -_id")
              .populate({
                path: "Title",
                select: "-__v -_id -name -capacity",
                match: { _id: ISBN},
                populate: {
                  path: "books",
                  select: "bookings name",
                  populate: {
                    path: "bookings",
                    match: { day: startDay }
                  }
                }
              })
              .lean();
    }

     async function getBookInfo(ISBN) {
            return Book.findById(ISBN)
              .select("-__v -bookings -_id")
              .populate({
                path: "ISBN",
                select: "title"
              });
          }
          async function getBookBookings(ISBN, startDay) {
            return Booking.find({ bookId: mongoose.Types.ObjectId(ISBN), day: startDay });
          }
        
          async function getUserBookBookingsByDate(startDay, userID) {
            return Booking.find({ user: mongoose.Types.ObjectId(userID), day: startDay });
          }*/
          return{
              reserveBook
              /*getBookings,
              getBookBookings,
              getUserBookBookingsByDate,
              getBookInfo*/
          };
        }
module.exports = bookReservationService;