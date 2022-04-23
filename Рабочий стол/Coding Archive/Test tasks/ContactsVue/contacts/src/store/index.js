import { createStore } from 'vuex';


class Contact 
{
  id = Date.now();
  register = new Date();

  constructor(name, last_name, phone)
  {
    this.name = name;
    this.last_name = last_name;
    this.phone = phone;
  }
}

function sendContacts(state) {
  fetch('/save_data', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(state)
  })
}

export default createStore({
  state: {
    name: '',
    last_name: '',
    phone: '',
    name: '',
    Contacts: [],
    EditItem: {},
    edit_card_show: false,
    success: '',
    error: ''
  },
  mounted(){
    this.getContact();
  },
  actions: {

    //Addendum of contacts. Used in Create component
    add({state}){
          state.Contacts.push(new Contact(state.name, state.last_name, state.phone))
         
          sendContacts(this.state.Contacts);

          state.success = 'Added successfully';
          state.error = '';
          state.name = '';
          state.last_name = '';
          state.phone = '';
          setTimeout(() => {
            state.success = '';
          }, 2000);
    },

    //Editing of contact. Used in List component
    edit({ state }, id)
    {
      state.EditItem = { ...state.Contacts.find((el) => el.id == id) };
      state.edit_card_show = true;
      sendContacts(this.state.Contacts);
    },

    //Deleting of a contact. Used in List component
    remove({ state }, id)
    {
      state.Contacts = state.Contacts.filter((el) => el.id != id);
      state.error = '';
      state.success = 'Deleted successfully';
      sendContacts(this.state.Contacts);
      setTimeout(()=>{
        state.success = '';
      },1000)
    },

    //As a contact has been altered, this function save changes. Used in List component
    save({state}, id)
    {
          let index = state.Contacts.findIndex((el) => el.id == id)
          state.Contacts[index] = {...state.EditItem};
          state.edit_card_show = false;
          state.error = '';
          state.success = 'Altered successfully';
          sendContacts(this.state.Contacts);
          setTimeout(()=>{
            state.EditItem = {};
            state.success = '';
          },1000)
    },
 
    //Closing of modal for modifying. Used in List component
    closeModal({state})
    {
      state.EditItem = {};
      state.edit_card_show = false;
    },

    //Get all contacts

    getContact() {
      fetch('/get_data')
        .then(res => res.json())
        .then(data => this.state.Contacts = data)
    }
   
  },
  modules: {
  }
})
