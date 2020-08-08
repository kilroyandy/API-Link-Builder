const quickFindEndpoints = [
  ["v3/events", "All Events"],
  ["v3/funds", "All Funds"],
  ["v3/memberships", "All Memberships"],
  ["v3/stock-items", "All Merchandise"],
  ["v3/statements", "All Contact Preferences"],
  ["v3/tag-groups", "All Tags"],
  ["v3/ticket-types", "All Ticket Types"],
];

const instanceEndpoints = [
  ["/status?includeChildPlans=true", "Instance Status"],
  ["/price-list", "Price List"],
  ["/supplementary-events", "Supplementary Events"],
];

//FUNCTION TO GET VALUES

function getValue(arr) {
  let value = document.getElementById(arr).value;
  return value;
}

// FUNCTIONS TO BUILD QUICK FIND INFORMATION

function createEventList(arr) {
  let html = "";
  for (i = 0; i < arr.length; i++) {
    html += `<li><a target="_blank" href=https://${getValue(
      "domain"
    )}/${getValue("clientname")}/api/${arr[i][0]}>${arr[i][1]}</a></li>`;
  }
  return html;
}

function generate() {
  document.querySelector(".events").innerHTML = `
  <ul>
    ${createEventList(quickFindEndpoints)}
  </ul>
  `;
  scrollBy(0, 50);
}

document.getElementById("generate").onclick = generate;

// FUNCTIONS TO BUILD EVENT INSTANCES

function createEventInstanceList() {
  let html = "";
  html += `<li><a target="_blank" href=https://${getValue("domain")}/${getValue(
    "clientname"
  )}/api/v3/events/${getValue(
    "eventId"
  )}/instances>All Instances for above Event Id</a></li>`;
  return html;
}

function generateInstance() {
  document.querySelector(".instances").innerHTML = `
    <ul>
      ${createEventInstanceList()}
    </ul>
    `;
}

document.getElementById("generateInstances").onclick = generateInstance;

// FUNCTIONS TO BUILD INSTANCE INFORMATION

function createInstanceInformationList(arr) {
  let html = "";

  for (i = 0; i < arr.length; i++) {
    html += `<li><a target="_blank" href=https://${getValue(
      "domain"
    )}/${getValue("clientname")}/api/v3/instances/${getValue("instanceId")}${
      arr[i][0]
    }>${arr[i][1]}</a></li>`;
  }
  return html;
}

function generateInstanceInformation() {
  document.querySelector(".instanceinfo").innerHTML = `
  <ul>
    ${createInstanceInformationList(instanceEndpoints)}
  </ul>
  `;
}

document.getElementById(
  "generateInstanceInformation"
).onclick = generateInstanceInformation;
