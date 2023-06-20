import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  contact_data: [
    {
      id: 1,
      name: "Nielsen Cobb",
      email: "nielsencobb@memora.com",
      company_name: "Memora",
      company_type: "Graniteville",
      status: "Open",
      status_color: "#03CFB7",
      status_bg_color: "#CDF5F1",
      contract: 77,
      date: "2021/12/20",
      image: "",
      image_name: "N",
      page_no: 1,
    },
    {
      id: 2,
      name: "Margret Cote",
      email: "margretcote@zilidium.com",
      company_name: "Zilidium",
      company_type: "Foxworth",
      status: "Closed",
      status_color: "#DC3545",
      status_bg_color: "#F8D7DA",
      contract: 22,
      date: "2021/09/12",
      image:
        "https://d19m59y37dris4.cloudfront.net/bubbly/1-3-2/img/avatar-1.jpg",
      image_name: "",
      page_no: 1,
    },
    {
      id: 3,
      name: "Rachel Vinson",
      email: "rachelvinson@chorizon.com",
      company_name: "Chorizon",
      company_type: "Eastmont",
      status: "on Hold",
      status_color: "#FFC107",
      status_bg_color: "#FFF3CD",
      contract: 28,
      date: "2021/10/01",
      image:
        "https://d19m59y37dris4.cloudfront.net/bubbly/1-3-2/img/avatar-2.jpg",
      image_name: "",
      page_no: 1,
    },
    {
      id: 4,
      name: "Gabrielle Aguirre",
      email: "gabrielleaguirre@comverges.com",
      company_name: "Comverges",
      company_type: "Whitewater",
      status: "In Progress",
      status_color: "#17A2B8",
      status_bg_color: "#D1ECF1",
      contract: 89,
      date: "2021/06/01",
      image: "",
      image_name: "G",
      page_no: 1,
    },
    {
      id: 5,
      name: "Spears Collier",
      email: "spearscollier@remold.com",
      company_name: "Remold",
      company_type: "Hebron",
      status: "Open",
      status_color: "#03CFB7",
      status_bg_color: "#CDF5F1",
      contract: 49,
      date: "2021/03/12",
      image:
        "https://d19m59y37dris4.cloudfront.net/bubbly/1-3-2/img/avatar-4.jpg",
      image_name: "",
      page_no: 1,
    },
    {
      id: 6,
      name: "Keisha Thomas",
      email: "keishathomas@euron.com",
      company_name: "Euron",
      company_type: "Levant",
      status: "Closed",
      status_color: "#DC3545",
      status_bg_color: "#F8D7DA",
      contract: 44,
      date: "2021/06/30",
      image:
        "https://d19m59y37dris4.cloudfront.net/bubbly/1-3-2/img/avatar-5.jpg",
      image_name: "",
      page_no: 2,
    },
    {
      id: 7,
      name: "Elisabeth Key",
      email: "elisabethkey@netagy.com",
      company_name: "Netagy",
      company_type: "Nile",
      status: "On Hold",
      status_color: "#FFC107",
      status_bg_color: "#FFF3CD",
      contract: 91,
      date: "2021/08/01",
      image: "",
      image_name: "E",
      page_no: 2,
    },
    {
      id: 8,
      name: "Patel Mack",
      email: "patelmack@zedalis.com",
      company_name: "Zedalis",
      company_type: "Albrightsville",
      status: "In Progress",
      status_color: "#17A2B8",
      status_bg_color: "#D1ECF1",
      contract: 100,
      date: "2021/03/08",
      image:
        "https://d19m59y37dris4.cloudfront.net/bubbly/1-3-2/img/avatar-7.jpg",
      image_name: "",
      page_no: 2,
    },
    {
      id: 9,
      name: "Erika Whitaker",
      email: "erikawhitaker@uniworld.com",
      company_name: "Uniworld",
      company_type: "Leola",
      status: "Open",
      status_color: "#03CFB7",
      status_bg_color: "#CDF5F1",
      contract: 76,
      date: "2021/01/17",
      image:
        "https://d19m59y37dris4.cloudfront.net/bubbly/1-3-2/img/avatar-8.jpg",
      image_name: "",
      page_no: 2,
    },
    {
      id: 10,
      name: "Meyers Swanson",
      email: "meyersswanson@candecor.com",
      company_name: "Candecor",
      company_type: "Finderne",
      status: "Closed",
      status_color: "#DC3545",
      status_bg_color: "#F8D7DA",
      contract: 14,
      date: "2021/02/19",
      image: "",
      image_name: "M",
      page_no: 2,
    },
    {
      id: 11,
      name: "Townsend Sloan",
      email: "townsendsloan@rameon.com",
      company_name: "Rameon",
      company_type: "Coultervillle",
      status: "On Hold",
      status_color: "#FFC107",
      status_bg_color: "#FFF3CD",
      contract: 55,
      date: "2021/03/16",
      image:
        "https://d19m59y37dris4.cloudfront.net/bubbly/1-3-2/img/avatar-1.jpg",
      image_name: "",
      page_no: 3,
    },
    {
      id: 12,
      name: "Millicent Henry",
      email: "millicenthenry@balooba.com",
      company_name: "Balooba",
      company_type: "Caron",
      status: "In Progress",
      status_color: "#17A2B8",
      status_bg_color: "#D1ECF1",
      contract: 77,
      date: "2021/04/09",
      image:
        "https://d19m59y37dris4.cloudfront.net/bubbly/1-3-2/img/avatar-2.jpg",
      image_name: "",
      page_no: 3,
    },
    {
      id: 13,
      name: "Madelyn Brock",
      email: "madelynbrock@combogene.com",
      company_name: "Combogene",
      company_type: "Ballico",
      status: "Open",
      status_color: "#03CFB7",
      status_bg_color: "#CDF5F1",
      contract: 89,
      date: "2021/03/09",
      image: "",
      image_name: "M",
      page_no: 3,
    },
    {
      id: 14,
      name: "Jenkins Carney",
      email: "jenkinscarney@dadabase.com",
      company_name: "Dadabase",
      company_type: "Chesterfield",
      status: "Closed",
      status_color: "#DC3545",
      status_bg_color: "#F8D7DA",
      contract: 48,
      date: "2021/07/06",
      image:
        "https://d19m59y37dris4.cloudfront.net/bubbly/1-3-2/img/avatar-4.jpg",
      image_name: "",
      page_no: 3,
    },
    {
      id: 15,
      name: "Grimes Delaney",
      email: "grimesdelaney@progenex.com",
      company_name: "Progenex",
      company_type: "Cazadero",
      status: "On Hold",
      status_color: "#FFC107",
      status_bg_color: "#FFF3CD",
      contract: 1,
      date: "2021/12/31",
      image:
        "https://d19m59y37dris4.cloudfront.net/bubbly/1-3-2/img/avatar-5.jpg",
      image_name: "",
      page_no: 3,
    },
    {
      id: 16,
      name: "Valencia Rivera",
      email: "valenciarivera@xleen.com",
      company_name: "Xleen",
      company_type: "Kirk",
      status: "In Progress",
      status_color: "#17A2B8",
      status_bg_color: "#D1ECF1",
      contract: 3,
      date: "2021/09/24",
      image: "",
      image_name: "V",
      page_no: 4,
    },
    {
      id: 17,
      name: "Helene Solomon",
      email: "helenesolomon@zomboid.com",
      company_name: "Zomboid",
      company_type: "Riverton",
      status: "Open",
      status_color: "#FFC107",
      status_bg_color: "#FFF3CD",
      contract: 63,
      date: "2021/07/30",
      image:
        "https://d19m59y37dris4.cloudfront.net/bubbly/1-3-2/img/avatar-7.jpg",
      image_name: "",
      page_no: 4,
    },
    {
      id: 18,
      name: "Kathleen Holman",
      email: "kathleenholman@hotcakes.com",
      company_name: "Hotcakes",
      company_type: "Darlington",
      status: "Closed",
      status_color: "#17A2B8",
      status_bg_color: "#D1ECF1",
      contract: 17,
      date: "2021/03/06",
      image:
        "https://d19m59y37dris4.cloudfront.net/bubbly/1-3-2/img/avatar-8.jpg",
      image_name: "",
      page_no: 4,
    },
    {
      id: 19,
      name: "Merrill Garrett",
      email: "merrillgarrett@affluex.com",
      company_name: "Affluex",
      company_type: "Utting",
      status: "On Hold",
      status_color: "#FFC107",
      status_bg_color: "#FFF3CD",
      contract: 48,
      date: "2021/02/04",
      image:
        "https://d19m59y37dris4.cloudfront.net/bubbly/1-3-2/img/avatar-10.jpg",
      image_name: "",
      page_no: 4,
    },
    {
      id: 20,
      name: "Sallie Booth",
      email: "salliebooth@ziggles.com",
      company_name: "Ziggles",
      company_type: "Waiohinu",
      status: "In Progress",
      status_color: "#17A2B8",
      status_bg_color: "#D1ECF1",
      contract: 61,
      date: "2021/10/09",
      image:
        "https://d19m59y37dris4.cloudfront.net/bubbly/1-3-2/img/avatar-11.jpg",
      image_name: "",
      page_no: 4,
    },
    {
      id: 21,
      name: "Doris Ward",
      email: "dorisward@imaginart.com",
      company_name: "Imaginart",
      company_type: "Wyano",
      status: "Open",
      status_color: "#FFC107",
      status_bg_color: "#FFF3CD",
      contract: 62,
      date: "2021/11/02",
      image:
        "https://d19m59y37dris4.cloudfront.net/bubbly/1-3-2/img/avatar-2.jpg",
      image_name: "",
      page_no: 5,
    },
    {
      id: 22,
      name: "Lester Roach",
      email: "lesterroach@applica.com",
      company_name: "Applica",
      company_type: "Coventry",
      status: "Closed",
      status_color: "#17A2B8",
      status_bg_color: "#D1ECF1",
      contract: 22,
      date: "2021/04/04",
      image: "",
      image_name: "L",
      page_no: 5,
    },
    {
      id: 23,
      name: "Garza Shaw",
      email: "garzashaw@capscreen.com",
      company_name: "Capscreen",
      company_type: "Beyerville",
      status: "On Hold",
      status_color: "#FFC107",
      status_bg_color: "#FFF3CD",
      contract: 93,
      date: "2021/12/22",
      image:
        "https://d19m59y37dris4.cloudfront.net/bubbly/1-3-2/img/avatar-4.jpg",
      image_name: "",
      page_no: 5,
    },
    {
      id: 24,
      name: "Charmaine Castro",
      email: "charmainecastro@naxdis.com",
      company_name: "Naxdis",
      company_type: "Cotopaxi",
      status: "In Progress",
      status_color: "#17A2B8",
      status_bg_color: "#D1ECF1",
      contract: 80,
      date: "2021/05/18",
      image:
        "https://d19m59y37dris4.cloudfront.net/bubbly/1-3-2/img/avatar-5.jpg",
      image_name: "",
      page_no: 5,
    },
    {
      id: 25,
      name: "Carey Petersen",
      email: "careypetersen@telepark.com",
      company_name: "Telepark",
      company_type: "Lowell	",
      status: "Open",
      status_color: "#03CFB7",
      status_bg_color: "#CDF5F1",
      contract: 55,
      date: "2021/03/11",
      image: "",
      image_name: "C",
      page_no: 5,
    },
    {
      id: 26,
      name: "Sargent Gray",
      email: "sargentgray@orbean.com",
      company_name: "Orbean",
      company_type: "Allison",
      status: "Closed",
      status_color: "#DC3545",
      status_bg_color: "#F8D7DA",
      contract: 68,
      date: "2021/07/29",
      image:
        "https://d19m59y37dris4.cloudfront.net/bubbly/1-3-2/img/avatar-7.jpg",
      image_name: "",
      page_no: 6,
    },
    {
      id: 27,
      name: "Dodson Goff",
      email: "dodsongoff@elentrix.com",
      company_name: "Elentrix",
      company_type: "Wedgewood",
      status: "On Hold",
      status_color: "#FFC107",
      status_bg_color: "#FFF3CD",
      contract: 29,
      date: "2021/08/07",
      image:
        "https://d19m59y37dris4.cloudfront.net/bubbly/1-3-2/img/avatar-8.jpg",
      image_name: "",
      page_no: 6,
    },
    {
      id: 28,
      name: "Medina Ellison",
      email: "medinaellison@glukgluk.com",
      company_name: "Glukgluk",
      company_type: "Rosburg",
      status: "In Progress",
      status_color: "#17A2B8",
      status_bg_color: "#D1ECF1",
      contract: 83,
      date: "2021/10/23",
      image:
        "https://d19m59y37dris4.cloudfront.net/bubbly/1-3-2/img/avatar-10.jpg",
      image_name: "",
      page_no: 6,
    },
    {
      id: 29,
      name: "Tisha Velazquez",
      email: "tishavelazquez@ginkogene.com",
      company_name: "Ginkogene",
      company_type: "Kapowsin",
      status: "Open",
      status_color: "#FFC107",
      status_bg_color: "#FFF3CD",
      contract: 40,
      date: "2021/06/05",
      image:
        "https://d19m59y37dris4.cloudfront.net/bubbly/1-3-2/img/avatar-11.jpg",
      image_name: "",
      page_no: 6,
    },
    {
      id: 30,
      name: "Young Bowers",
      email: "youngbowers@shepard.com",
      company_name: "Shepard",
      company_type: "Eureka",
      status: "Closed",
      status_color: "#17A2B8",
      status_bg_color: "#D1ECF1",
      contract: 96,
      date: "2021/12/04",
      image: "",
      image_name: "Y",
      page_no: 6,
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
              index + 1 >= ((state.pagination_click - 1) * state.limit)+1 &&
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
            index + 1 >= ((state.pagination_click - 1) * state.limit)+1 &&
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
export const { pagination, increasePgn, increaseLimit, find } =
  counterSlice.actions;

export default counterSlice.reducer;