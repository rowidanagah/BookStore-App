import { useMutation } from "@apollo/client";
import { AddBook_Mutation, SignUp_Mutation } from "../../ApolloClient/ROOT_MUTATIONS";
import { useState } from "react";
import useAddBook from "../../hooks/useAddBook";
import HomeBtn from "../HomeButton";

const AddBook = () => {
    const [Bookdata, setBookdata] = useState({
        "title": "the secret key",
        "author": "hover",
        "price": 0,
        "genre": "fiction",
        "recap": ""
    });
    const { data, loadingState, AddBookWrapper } = useAddBook();

    const handleSubmit = async (Bookdata, event) => {
        event.preventDefault();
        await AddBookWrapper(Bookdata);
    };

    return (
        <div>
            <div class="section_our_solution container mt-5 ">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12">
                        <div class="our_solution_category">
                            <div class="solution_cards_box">
                                <div class="solution_card">
                                    <div class="hover_color_bubble"></div>
                                    <form onSubmit={(event) => handleSubmit(Bookdata, event)}>
                                        {/* title */}
                                        <div class="form-group">
                                            <label for="exampleInputtitle1">Book title </label>
                                            <input
                                                type="title"
                                                class="form-control"
                                                id="exampleInputtitle1"
                                                aria-describedby="titleHelp"
                                                placeholder="Enter title"
                                                value={Bookdata.title}
                                                onChange={(e) => {
                                                    setBookdata({
                                                        ...Bookdata,
                                                        title: e.target.value,
                                                    });
                                                    console.log(Bookdata);
                                                }}
                                            />

                                        </div>
                                        {/* author */}
                                        <div class="form-group">
                                            <label for="exampleInputPassword1">author Name</label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                id="exampleInputPassword1"
                                                value={Bookdata.author}
                                                onChange={(e) => {
                                                    setBookdata({
                                                        ...Bookdata,
                                                        author: e.target.value,
                                                    });
                                                }}
                                                placeholder="author"
                                            />
                                        </div>
                                        {/* price */}
                                        <div class="form-group">
                                            <label for="exampleInputPassword1">price</label>
                                            <input
                                                type="number"
                                                class="form-control"
                                                value={Bookdata.price}
                                                onChange={(e) => {
                                                    setBookdata({
                                                        ...Bookdata,
                                                        price: e.target.value,
                                                    });
                                                }}
                                                placeholder="price"
                                            />
                                        </div>
                                        {/*genre*/}
                                        <div class="form-group">
                                            <label for="exampleInputPassword1">
                                                genre
                                            </label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                id="exampleInputPassword1"
                                                value={Bookdata.genre}
                                                onChange={(e) => {
                                                    setBookdata({
                                                        ...Bookdata,
                                                        genre: e.target.value,
                                                    });
                                                    console.log(Bookdata);
                                                }}
                                                placeholder="gener"
                                            />
                                        </div>

                                        <button type="submit" class="btn btn-primary m-3">
                                            Submit
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <HomeBtn />
        </div>
    );
};

export default AddBook;
