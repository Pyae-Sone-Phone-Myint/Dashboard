import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  contact_data: [
    {
      id: 1,
      name: "Nielsen Cobb",
      email: "nielsencobb@gmail.com",
      tour_name: "Java & Bali One Life Adventures",
      tour_type: "Adventure, Discovery",
      guests: "3",
      price: "$139.00",
      date: "2021/12/20",
      image_name: "N",
      page_no: 1,
    },
    {
      id: 2,
      name: "Margret Cote",
      email: "margretcote@gmail.com",
      tour_name: "Mykonos and Santorini Tour",
      tour_type: "Mountain Biking",
      guests: "7",
      price: "$169.00",
      date: "2021/09/12",
      page_no: 1,
    },
    {
      id: 3,
      name: "Rachel Vinson",
      email: "rachelvinson@gmail.com",
      tour_name: "Boathouse Neighborhood",
      tour_type: "Adventure",
      guests: "9",
      price: "$199.00",
      date: "2021/10/01",
      page_no: 1,
    },
    {
      id: 4,
      name: "Gabrielle Aguirre",
      email: "gabrielleaguirre@gmail.com",
      tour_name: "Body of Water Near Mountain",
      tour_type: "Beache",
      guests: "4",
      price: "$289.52",
      date: "2021/06/01",
      image_name: "G",
      page_no: 1,
    },
    {
      id: 5,
      name: "Spears Collier",
      email: "spearscollier@gmail.com",
      tour_name: "Rainbow Mountain Red Valley",
      tour_type: "Mountain Biking",
      guests: "2",
      price: "$319.00",
      date: "2021/03/12",
      page_no: 1,
    },
    {
      id: 6,
      name: "Keisha Thomas",
      email: "keishathomas@gmail.com",
      tour_name: "Yucatán Peninsula & Caribbean",
      tour_type: "Beache",
      guests: "8",
      price: "$619.00",
      date: "2021/06/30",
      page_no: 2,
    },
    {
      id: 7,
      name: "Elisabeth Key",
      email: "elisabethkey@gmail.com",
      tour_name: "Cottages In The Middle Of Beach",
      tour_type: "Tent Camping",
      guests: "9",
      price: "$109.00",
      date: "2021/08/01",
      image_name: "E",
      page_no: 2,
    },
    {
      id: 8,
      name: "Patel Mack",
      email: "patelmack@gmail.com",
      tour_name: "Man Standing on a Rock",
      tour_type: "Adventure",
      guests: "6",
      price: "$116.10",
      date: "2021/03/08",
      page_no: 2,
    },
    {
      id: 9,
      name: "Erika Whitaker",
      email: "erikawhitaker@gmail.com",
      tour_name: "Beautiful Floating Villa",
      tour_type: "Adventure",
      guests: "8",
      price: "$116.10",
      date: "2021/01/17",
      page_no: 2,
    },
    {
      id: 10,
      name: "Meyers Swanson",
      email: "meyersswanson@gmail.com",
      tour_name: "North Island Adventure Tour",
      tour_type: "Discovery",
      guests: "4",
      price: "$129.00",
      date: "2021/02/19",
      image_name: "M",
      page_no: 2,
    },
    {
      id: 11,
      name: "Townsend Sloan",
      email: "townsendsloan@gmail.com",
      tour_name: "Discovery Island Kayak Tour",
      tour_type: "Adventure",
      guests: "3",
      price: "$129.00",
      date: "2021/03/16",
      page_no: 3,
    },
    {
      id: 12,
      name: "Millicent Henry",
      email: "millicenthenry@gmail.com",
      tour_name: "Walking the Amalfi Coast",
      tour_type: "Adventure",
      guests: "8",
      price: "$129.00",
      date: "2021/04/09",
      page_no: 3,
    },
    {
      id: 13,
      name: "Madelyn Brock",
      email: "madelynbrock@gmail.com",
      tour_name: "Java & Bali One Life Adventures",
      tour_type: "Adventure, Discovery",
      guests: "3",
      price: "$139.00",
      date: "2021/03/09",
      image_name: "M",
      page_no: 3,
    },
    {
      id: 14,
      name: "Jenkins Carney",
      email: "jenkinscarney@gmail.com",
      tour_name: "Walking the Amalfi Coast",
      tour_type: "Adventure",
      guests: "8",
      price: "$129.00",
      date: "2021/07/06",
      page_no: 3,
    },
    {
      id: 15,
      name: "Grimes Delaney",
      email: "grimesdelaney@gmail.com",
      tour_name: "North Island Adventure Tour",
      tour_type: "Discovery",
      guests: "4",
      price: "$129.00",
      date: "2021/12/31",
      page_no: 3,
    },
    {
      id: 16,
      name: "Valencia Rivera",
      email: "valenciarivera@gmail.com",
      tour_name: "Beautiful Floating Villa",
      tour_type: "Adventure",
      guests: "8",
      price: "$116.10",
      date: "2021/09/24",
      image_name: "V",
      page_no: 4,
    },
    {
      id: 17,
      name: "Helene Solomon",
      email: "helenesolomon@gmail.com",
      tour_name: "Man Standing on a Rock",
      tour_type: "Adventure",
      guests: "6",
      price: "$116.10",
      date: "2021/07/30",
      page_no: 4,
    },
    {
      id: 18,
      name: "Kathleen Holman",
      email: "kathleenholman@gmail.com",
      tour_name: "Rainbow Mountain Red Valley",
      tour_type: "Mountain Biking",
      guests: "2",
      price: "$319.00",
      date: "2021/03/06",
      page_no: 4,
    },
    {
      id: 19,
      name: "Merrill Garrett",
      email: "merrillgarrett@gmail.com",
      tour_name: "Body of Water Near Mountain",
      tour_type: "Beache",
      guests: "4",
      price: "$289.52",
      date: "2021/02/04",
      page_no: 4,
    },
    {
      id: 20,
      name: "Sallie Booth",
      email: "salliebooth@gmail.com",
      tour_name: "Mykonos and Santorini Tour",
      tour_type: "Mountain Biking",
      guests: "7",
      price: "$169.00",
      date: "2021/10/09",
      page_no: 4,
    },
    {
      id: 21,
      name: "Doris Ward",
      email: "dorisward@gmail.com",
      tour_name: "Java & Bali One Life Adventures",
      tour_type: "Adventure, Discovery",
      guests: "3",
      price: "$139.00",
      date: "2021/11/02",
      page_no: 5,
    },
    {
      id: 22,
      name: "Lester Roach",
      email: "lesterroach@gmail.com",
      tour_name: "Beautiful Floating Villa",
      tour_type: "Adventure",
      guests: "8",
      price: "$116.10",
      date: "2021/04/04",
      image_name: "L",
      page_no: 5,
    },
    {
      id: 23,
      name: "Garza Shaw",
      email: "garzashaw@gmail.com",
      tour_name: "Beautiful Floating Villa",
      tour_type: "Adventure",
      guests: "8",
      price: "$116.10",
      date: "2021/12/22",
      page_no: 5,
    },
    {
      id: 24,
      name: "Charmaine Castro",
      email: "charmainecastro@gmail.com",
      tour_name: "Man Standing on a Rock",
      tour_type: "Adventure",
      guests: "6",
      price: "$116.10",
      date: "2021/05/18",
      page_no: 5,
    },
    {
      id: 25,
      name: "Carey Petersen",
      email: "careypetersen@gmail.com",
      tour_name: "Mykonos and Santorini Tour",
      tour_type: "Mountain Biking",
      guests: "7",
      price: "$169.00",
      date: "2021/03/11",
      image_name: "C",
      page_no: 5,
    },
    {
      id: 26,
      name: "Sargent Gray",
      email: "sargentgray@gmail.com",
      tour_name: "Walking the Amalfi Coast",
      tour_type: "Adventure",
      guests: "8",
      price: "$129.00",
      date: "2021/07/29",
      page_no: 6,
    },
    {
      id: 27,
      name: "Dodson Goff",
      email: "dodsongoff@gmail.com",
      tour_name: "Yucatán Peninsula & Caribbean",
      tour_type: "Beache",
      guests: "8",
      price: "$619.00",
      date: "2021/08/07",
      page_no: 6,
    },
    {
      id: 28,
      name: "Medina Ellison",
      email: "medinaellison@gmail.com",
      tour_name: "Rainbow Mountain Red Valley",
      tour_type: "Mountain Biking",
      guests: "2",
      price: "$319.00",
      date: "2021/10/23",
      page_no: 6,
    },
    {
      id: 29,
      name: "Tisha Velazquez",
      email: "tishavelazquez@gmail.com",
      tour_name: "Boathouse Neighborhood",
      tour_type: "Adventure",
      guests: "9",
      price: "$199.00",
      date: "2021/06/05",
      page_no: 6,
    },
    {
      id: 30,
      name: "Young Bowers",
      email: "youngbowers@gmail.com",
      tour_name: "Body of Water Near Mountain",
      tour_type: "Beache",
      guests: "4",
      price: "$289.52",
      date: "2021/12/04",
      image_name: "Y",
      page_no: 6,
    },
  ],
  post_data: [
    {
      id: 1,
      image:
        "https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/tour-5.jpg",
      title: "Cottages In The Middle Of Beach",
      price: "$109.00",
      tour_type: "Tent Camping",
      duration: "3 days",
      date: "2020/11/12",
    },
    {
      id: 2,
      image:
        "https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/tour-4.jpg",
      title: "Man Standing on a Rock",
      price: "$116.10",
      tour_type: "Adventure",
      duration: "3 days",
      date: "2020/11/29",
    },
    {
      id: 3,
      image:
        "https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/tour-6.jpg",
      title: "Beautiful Floating Villa",
      price: "$116.10",
      tour_type: "Adventure",
      duration: "5 days",
      date: "2020/112/12",
    },
    {
      id: 4,
      image:
        "https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/tour-10.jpg",
      title: "North Island Adventure Tour",
      price: "$129.00",
      tour_type: "Discovery",
      duration: "3 days",
      date: "2022/11/12",
    },
    {
      id: 5,
      image:
        "https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/tour-8.jpg",
      title: "Discovery Island Kayak Tour",
      price: "$129.00",
      tour_type: "Adventure",
      duration: "3 days",
      date: "2023/11/12",
    },
    {
      id: 6,
      image:
        "https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/tour-12.jpg",
      title: "Walking the Amalfi Coast",
      price: "$129.00",
      tour_type: "Adventure",
      duration: "5 days",
      date: "2019/07/19",
    },
    {
      id: 7,
      image:
        "https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/tour-9.jpg",
      title: "Java & Bali One Life Adventures",
      price: "$139.00",
      tour_type: "Adventure, Discovery",
      duration: "3 days",
      date: "2020/09/12",
    },
    {
      id: 8,
      image:
        "https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/tour-3.jpg",
      title: "Mykonos and Santorini Tour",
      price: "$169.00",
      tour_type: "Mountain Biking",
      duration: "6 days",
      date: "2020/01/12",
    },
    {
      id: 9,
      image:
        "https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/tour-1.jpg",
      title: "Boathouse Neighborhood",
      price: "$199.00",
      tour_type: "Adventure",
      duration: "2 days",
      date: "2023/01/12",
    },
    {
      id: 10,
      image:
        "https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/tour-7.jpg",
      title: "Body of Water Near Mountain",
      price: "$289.52",
      tour_type: "Beache",
      duration: "3 days",
      date: "2020/11/29",
    },
    {
      id: 11,
      image:
        "https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/tour-11.jpg",
      title: "Rainbow Mountain Red Valley",
      price: "$319.00",
      tour_type: "Mountain Biking",
      duration: "5 days",
      date: "2022/11/24",
    },
    {
      id: 12,
      image:
        "https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/tour-2.jpg",
      title: "Yucatán Peninsula & Caribbean",
      price: "$619.00",
      tour_type: "Beache",
      duration: "3 days",
      date: "2022/10/12",
    },
  ],
  search: "",
  show_data: [],
  pagination_qty: [],
  pagination_click: 1,
  contact_qty: 0,
  limit: 5,
};

export const counterSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    pagination: (state) => {
      if (state.search !== "") {
        const search_data = state.contact_data.filter((data) => {
          if (data.name.toLowerCase().includes(state.search.toLowerCase())) {
            return data;
          }
        });
        if (search_data.length !== 0) {
          state.contact_qty = search_data.length;
          const qty = Math.ceil(search_data.length / state.limit);
          const pagi_arr = [];
          for (let i = 0; i < qty; i++) {
            pagi_arr.push(i);
          }
          state.pagination_qty = pagi_arr;
          search_data.map((data, index) => {
            data.offset = index + 1;
          });
          const filter_data = search_data.map((data, index) => {
            if (
              index + 1 >= (state.pagination_click - 1) * state.limit + 1 &&
              index + 1 <= state.pagination_click * state.limit
            ) {
              return data;
            }
          });
          state.show_data = filter_data.filter((data) => {
            if (data !== "undefined") {
              return data;
            }
          });
        }
      } else {
        state.contact_qty = state.contact_data.length;
        const qty = Math.ceil(state.contact_data.length / state.limit);
        const pagi_arr = [];
        for (let i = 0; i < qty; i++) {
          pagi_arr.push(i);
        }
        state.pagination_qty = pagi_arr;
        state.contact_data.map((data, index) => {
          data.offset = index + 1;
        });
        const filter_data = state.contact_data.map((data, index) => {
          if (
            index + 1 >= (state.pagination_click - 1) * state.limit + 1 &&
            index + 1 <= state.pagination_click * state.limit
          ) {
            return data;
          }
        });
        state.show_data = filter_data.filter((data) => {
          if (data !== "undefined") {
            return data;
          }
        });
      }
    },
    post_pagination: (state) => {
      if (state.search !== "") {
        const search_data = state.post_data.filter((data) => {
          if (data.name.toLowerCase().includes(state.search.toLowerCase())) {
            return data;
          }
        });
        if (search_data.length !== 0) {
          state.contact_qty = search_data.length;
          const qty = Math.ceil(search_data.length / state.limit);
          const pagi_arr = [];
          for (let i = 0; i < qty; i++) {
            pagi_arr.push(i);
          }
          state.pagination_qty = pagi_arr;
          search_data.map((data, index) => {
            data.offset = index + 1;
          });
          const filter_data = search_data.map((data, index) => {
            if (
              index + 1 >= (state.pagination_click - 1) * state.limit + 1 &&
              index + 1 <= state.pagination_click * state.limit
            ) {
              return data;
            }
          });
          state.show_data = filter_data.filter((data) => {
            if (data !== "undefined") {
              return data;
            }
          });
        }
      } else {
        state.contact_qty = state.post_data.length;
        const qty = Math.ceil(state.post_data.length / state.limit);
        const pagi_arr = [];
        for (let i = 0; i < qty; i++) {
          pagi_arr.push(i);
        }
        state.pagination_qty = pagi_arr;
        state.post_data.map((data, index) => {
          data.offset = index + 1;
        });
        const filter_data = state.post_data.map((data, index) => {
          if (
            index + 1 >= (state.pagination_click - 1) * state.limit + 1 &&
            index + 1 <= state.pagination_click * state.limit
          ) {
            return data;
          }
        });
        state.show_data = filter_data.filter((data) => {
          if (data !== "undefined") {
            return data;
          }
        });
      }
    },
    increasePgn: (state, { payload }) => {
      state.pagination_click = payload;
      return;
    },
    increaseLimit: (state, { payload }) => {
      state.limit = payload;
      return;
    },
    find: (state, { payload }) => {
      state.search = payload;
      return;
    },
  },
});
export const { pagination, increasePgn, increaseLimit, find, post_pagination } =
  counterSlice.actions;

export default counterSlice.reducer;
