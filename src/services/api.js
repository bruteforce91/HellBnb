const baseURL = "https://api.musement.com/api/v3";

async function callAPI(endpoint) {
  const response = await fetch(`${baseURL}/${endpoint}`);
  const data = await response.json();
  if (response.status >= 400) {
    throw new Error(data.message);
  }
  return data.data;
}

export async function fetchActivities() {
  return callAPI("activities");
}

export async function fetchCities() {
  const response = await fetch(`${baseURL}/cities?limit=15`);
  const data = await response.json();

  if (response.status >= 400) {
    // eslint-disable-next-line
    console.warn("Error: cities by fetchCities");
    throw new Error(data.message);
  }
  return data;
}

export async function fetchActivityByUuid(activityUuid) {
  const response = await fetch(`${baseURL}/activities/${activityUuid}`);
  const data = await response.json();

  if (response.status >= 400) {
    // eslint-disable-next-line
    console.warn("Error: activity by fetchActivityByUiid");
    throw new Error(data.message);
  }
  return data;
}

export async function fetchRelatedActivity(activityUuid) {
  const response = await fetch(
    `${baseURL}/activities/${activityUuid}/related-activities`
  );
  const data = await response.json();

  if (response.status >= 400) {
    // eslint-disable-next-line
    console.warn("Error: relatedActivities by fetchRelatedActivities");
    throw new Error(data.message);
  }
  return data;
}

export async function fetchActivityMedia(activityUuid) {
  const response = await fetch(`${baseURL}/activities/${activityUuid}/media`);
  const data = await response.json();

  if (response.status >= 400) {
    // eslint-disable-next-line
    console.warn("Error: activityMedia by fetchActivityMedia");
    throw new Error(data.message);
  }
  return data;
}

export async function fetchActivityRefundPolicy(activityUuid) {
  const response = await fetch(
    `${baseURL}/activities/${activityUuid}/refund-policies`
  );
  return response;
}

export async function fetchActivityComments(activityUuid) {
  const response = await fetch(
    `${baseURL}/activities/${activityUuid}/comments`
  );
  const data = await response.json();
  if (response.status >= 400) {
    throw new Error(data.message);
  }
  return data;
}
