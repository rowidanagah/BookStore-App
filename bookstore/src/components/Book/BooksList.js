import BookItem from "./BookItem";
import '../BookCard.css'
import AddBookBtn from "./AddBookBtn";
import SignUpBtn from "../SignUpBtn";

const BooksList = ({ books, refetch }) => {
    console.log(books)
    return (
        <div className="">
            <br /><br /><br /><br /><br />

            <div class="section_our_solution">
                <AddBookBtn />
                <SignUpBtn />
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12">
                        <div class="our_solution_category ">
                            {books && books.map(book => <BookItem {...book} key={book.id} />)}
                        </div>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default BooksList;