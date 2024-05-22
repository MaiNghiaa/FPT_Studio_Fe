// api.js
const axios = require("axios");

const fetchDataProduct = async (
  Product,
  Detail,
  RomMin,
  ColorDefault,
  setDetailItem,
  setHeadingData,
  setDescriptionData
) => {
  try {
    const [DetailItemResponse, moreDetails] = await Promise.all([
      axios.get(
        `http://localhost:3000/${Product}/${Detail}?RomMin=${RomMin}&ColorDefault=${ColorDefault}`
      ),
      axios.get(`http://localhost:3000/${Product}/${Detail}/MoreDetail`),
    ]);

    setDetailItem(DetailItemResponse.data);
    setHeadingData(moreDetails.data.headingData);
    setDescriptionData(moreDetails.data.descriptionData);
  } catch (error) {
    console.error("There was an error!", error);
  }
};

module.exports = { fetchDataProduct };
