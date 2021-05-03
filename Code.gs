
function getItemKey(id) {
  switch (id) {
    case NAME_ID:
      return "name"
    case GENDER_ID:
      return "gender"
    case AGE_ID:
      return "age"
    case DISTANCE_ID:
      return "distance"
    case TIME_ID:
      return "result"
    case RESULT_URL_ID:
      return "result_url"
  }
}

function databaseTestFunction(e) {
  const store = FirebaseApp.getDatabaseByUrl(FIREBASEDATABASE_URL, FIREBASEDATABASE_SECRET);
  let data = {
    email: e.response.getRespondentEmail()
  };

  let itemResponses = e.response.getItemResponses();
  for (let i = 0; i < itemResponses.length; i++) {
    let itemResponse = itemResponses[i];
    let itemKey = getItemKey(itemResponse.getItem().getId());
    
    data[itemKey] = itemResponse.getResponse();
  }

  store.updateData(
    e.response.getId(),
    data
  );
}
