import data, { ContactInterface } from "../utils/data";

class ContactsService {
  async getContacts() {
    const dataFetched: ContactInterface[] = await new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve(data);
        }, 300);
      }
    );
    return dataFetched;
  }
}

export default new ContactsService();
