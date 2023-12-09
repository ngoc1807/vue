<script lang="ts" setup>
const props = defineProps({
  accordionID: String,
  accordionBody: String,
  collapse: String,
});

const { accordionBody, accordionID, collapse } = props;
console.log("", accordionBody, accordionID);
</script>

<template>
  <div class="TableCustom">
    <div class="accordion" :id="accordionID">
      <div class="accordion-item">
        <div class="accordion-header" :id="accordionBody">
          <div class="box">
            <button
              class="icon-down"
              data-bs-toggle="collapse"
              :data-bs-target="'#' + collapse"
              aria-expanded="true"
              :aria-controls="collapse"
            >
              <font-awesome-icon icon="fa-solid fa-chevron-down" />
            </button>

            <button
              class="label"
              data-bs-toggle="collapse"
              :data-bs-target="'#' + collapse"
              aria-expanded="true"
              :aria-controls="collapse"
            >
              Coffee (20)
            </button>
            <button class="icon-ellipsis m">
              <font-awesome-icon icon="fa-solid fa-ellipsis" />
            </button>
            <a class="link">
              <font-awesome-icon icon="fa-solid fa-gear" />
              <span> Vertical Setting </span>
            </a>
          </div>
        </div>

        <div
          :id="collapse"
          class="accordion-collapse collapse"
          :aria-labelledby="accordionBody"
          :data-bs-parent="'#' + accordionID"
        >
          <div class="accordion-body">
            <table>
              <thead>
                <tr>
                  <th class="thead-checkbox">
                    <input
                      class="form-check-input mt-0 mx-2"
                      type="checkbox"
                      value=""
                    />
                  </th>
                  <th class="thead-name">
                    <div>Name</div>
                  </th>
                  <th class="thead-type">
                    <button>
                      <span>Type</span>
                      <font-awesome-icon icon="fa-solid fa-chevron-down" />
                    </button>
                  </th>
                  <th class="thead-type">
                    <button>
                      <span>species</span>
                      <font-awesome-icon icon="fa-solid fa-chevron-down" />
                    </button>
                  </th>
                  <th class="thead-type">
                    <button>
                      <span>Origin</span>
                      <font-awesome-icon icon="fa-solid fa-chevron-down" />
                    </button>
                  </th>
                  <th class="thead-name">
                    <div>
                      <span>Global</span>
                      <font-awesome-icon icon="fa-solid fa-circle-question" />
                    </div>
                  </th>

                  <th class="thead-name">
                    <span>Company</span>
                  </th>
                  <th class="thead-detail"></th>
                  <th class="thead-more"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="tbody-checkbox">
                    <input
                      class="form-check-input mx-2"
                      type="checkbox"
                      value=""
                    />
                  </td>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>

                  <td class="tbody-detail">
                    <a href="#"> View Details </a>
                  </td>
                  <td class="tbody-more">
                    <div class="dropdown">
                      <button
                        class="btn dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <font-awesome-icon
                          icon="fa-solid fa-ellipsis-vertical"
                        />
                      </button>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li>
                          <a class="dropdown-item" href="#">Another action</a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#"
                            >Something else here</a
                          >
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="tbody-checkbox">
                    <input
                      class="form-check-input mx-2"
                      type="checkbox"
                      value=""
                    />
                  </td>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>

                  <td class="tbody-detail">
                    <a href="#"> View Details </a>
                  </td>
                  <td class="tbody-more">
                    <div class="dropdown">
                      <button
                        class="btn dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <font-awesome-icon
                          icon="fa-solid fa-ellipsis-vertical"
                        />
                      </button>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li>
                          <a class="dropdown-item" href="#">Another action</a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#"
                            >Something else here</a
                          >
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="tbody-checkbox">
                    <input
                      class="form-check-input mx-2"
                      type="checkbox"
                      value=""
                    />
                  </td>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>

                  <td class="tbody-detail">
                    <a href="#"> View Details </a>
                  </td>
                  <td class="tbody-more">
                    <div class="dropdown">
                      <button
                        class="btn dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <font-awesome-icon
                          icon="fa-solid fa-ellipsis-vertical"
                        />
                      </button>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li>
                          <a class="dropdown-item" href="#">Another action</a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#"
                            >Something else here</a
                          >
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="tbody-checkbox">
                    <input
                      class="form-check-input mx-2"
                      type="checkbox"
                      value=""
                    />
                  </td>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>

                  <td class="tbody-detail">
                    <a href="#"> View Details </a>
                  </td>
                  <td class="tbody-more">
                    <div class="dropdown">
                      <button
                        class="btn dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <font-awesome-icon
                          icon="fa-solid fa-ellipsis-vertical"
                        />
                      </button>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li>
                          <a class="dropdown-item" href="#">Another action</a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#"
                            >Something else here</a
                          >
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="tbody-checkbox">
                    <input
                      class="form-check-input mx-2"
                      type="checkbox"
                      value=""
                    />
                  </td>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>

                  <td class="tbody-detail">
                    <a href="#"> View Details </a>
                  </td>
                  <td class="tbody-more">
                    <div class="dropdown">
                      <button
                        class="btn dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <font-awesome-icon
                          icon="fa-solid fa-ellipsis-vertical"
                        />
                      </button>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li>
                          <a class="dropdown-item" href="#">Another action</a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#"
                            >Something else here</a
                          >
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="tbody-checkbox">
                    <input
                      class="form-check-input mx-2"
                      type="checkbox"
                      value=""
                    />
                  </td>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>

                  <td class="tbody-detail">
                    <a href="#"> View Details </a>
                  </td>
                  <td class="tbody-more">
                    <div class="dropdown">
                      <button
                        class="btn dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <font-awesome-icon
                          icon="fa-solid fa-ellipsis-vertical"
                        />
                      </button>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li>
                          <a class="dropdown-item" href="#">Another action</a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#"
                            >Something else here</a
                          >
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="tbody-checkbox">
                    <input
                      class="form-check-input mx-2"
                      type="checkbox"
                      value=""
                    />
                  </td>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>

                  <td class="tbody-detail">
                    <a href="#"> View Details </a>
                  </td>
                  <td class="tbody-more">
                    <div class="dropdown">
                      <button
                        class="btn dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <font-awesome-icon
                          icon="fa-solid fa-ellipsis-vertical"
                        />
                      </button>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li>
                          <a class="dropdown-item" href="#">Another action</a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#"
                            >Something else here</a
                          >
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
