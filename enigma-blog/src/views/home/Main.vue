<template>
  <!-- BEGIN : ListItemType_1  -->
  <div class="grid grid-cols-12 gap-6">
    <div class="col-span-12 lg:col-span-9">
      <div class="grid grid-cols-12 gap-6">
        <!-- BEGIN: General  -->
        <div class="col-span-12 mt-8">
          <div class="intro-y flex items-center h-10">
            <h2 class="text-lg font-medium truncate mr-5">General Report</h2>
            <a href="" class="ml-auto text-primary truncate">Show More</a>
          </div>
          <div class="report-box-2 intro-y mt-5">
            <div class="box grid grid-cols-12">
              <div
                class="col-span-12 p-3 border-t lg:border-t-0 lg:border-l border-slate-200 dark:border-darkmode-300 border-dashed"
              >
                <!-- BEGIN: Weekly Best Sellers -->
                <div class="col-span-12 lg:col-span-12 xl:col-span-4">
                  <div class="mt-3">
                    <div
                      v-for="(faker, fakerKey) in $_.take($f(), 4)"
                      :key="fakerKey"
                      class="intro-y"
                    >
                      <div
                        class="box px-4 py-4 mb-3 flex items-center zoom-in border border-slate-200/60 dark:border-darkmode-400"
                      >
                        <div
                          class="w-10 h-10 flex-none image-fit rounded-md overflow-hidden"
                        >
                          <img
                            alt="Midone Tailwind HTML Admin Template"
                            :src="faker.photos[0]"
                          />
                        </div>
                        <div class="ml-4 mr-auto">
                          <div class="font-medium">
                            {{ faker.users[0].name }}
                          </div>
                          <div class="text-slate-500 text-xs mt-0.5">
                            {{ faker.dates[0] }}
                          </div>
                        </div>
                        <div
                          class="py-1 px-2 rounded-full text-xs bg-success text-white cursor-pointer font-medium"
                        >
                          137 Sales
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- END: Weekly Best Sellers -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- END: General   -->
    </div>
    <div class="col-span-12 lg:col-span-3">
      <div class="lg:border-l -mb-10 pb-10">
        <div class="lg:pl-6 grid grid-cols-12 gap-x-6 lg:gap-x-0 gap-y-6">
          <!-- BEGIN: Important Notes -->
          <div class="col-span-12 mt-3 lg:mt-8">
            <div class="mt-5 intro-x">
              <div class="box zoom-in">
                <img src="https://picsum.photos/500/300" alt="" />
              </div>
            </div>
          </div>
          <!-- END: Important Notes -->
        </div>
      </div>
    </div>
  </div>
  <!-- END : ListItemType_1 -->

  <!-- BEGIN : ListItemType_2 -->
  <div>
    <h2 class="intro-y text-4xl font-medium mt-10 text-center">Product Grid</h2>
    <div class="intro-y grid grid-cols-12 gap-6 mt-5">
      <!-- BEGIN: Blog Layout -->
      <div
        v-for="(faker, fakerKey) in $_.take($f(), 3)"
        :key="fakerKey"
        class="intro-y col-span-12 md:col-span-6 xl:col-span-4 box"
      >
        <div
          class="flex items-center border-b border-slate-200/60 dark:border-darkmode-400 px-5 py-4"
        >
          <div class="w-10 h-10 flex-none image-fit">
            <img
              alt="Midone Tailwind HTML Admin Template"
              class="rounded-full"
              :src="faker.photos[0]"
            />
          </div>
          <div class="ml-3 mr-auto">
            <a href="" class="font-medium">{{ faker.users[0].name }}</a>
            <div class="flex text-slate-500 truncate text-xs mt-0.5">
              <a class="text-primary inline-block truncate" href="">{{
                faker.products[0].category
              }}</a>
              <span class="mx-1">•</span> {{ faker.formattedTimes[0] }}
            </div>
          </div>
          <Dropdown class="ml-3">
            <DropdownToggle
              tag="a"
              href="javascript:;"
              class="w-5 h-5 text-slate-500"
            >
              <MoreVerticalIcon class="w-5 h-5" />
            </DropdownToggle>
            <DropdownMenu class="w-40">
              <DropdownContent>
                <DropdownItem>
                  <Edit2Icon class="w-4 h-4 mr-2" /> Edit Post
                </DropdownItem>
                <DropdownItem>
                  <TrashIcon class="w-4 h-4 mr-2" /> Delete Post
                </DropdownItem>
              </DropdownContent>
            </DropdownMenu>
          </Dropdown>
        </div>
        <div class="p-5">
          <div class="h-40 2xl:h-56 image-fit">
            <img
              alt="Midone Tailwind HTML Admin Template"
              class="rounded-md"
              :src="faker.images[0]"
            />
          </div>
          <a href="" class="block font-medium text-base mt-5">{{
            faker.news[0].title
          }}</a>
          <div class="text-slate-600 dark:text-slate-500 mt-2">
            {{ faker.news[0].shortContent }}
          </div>
        </div>
        <div
          class="flex items-center px-5 py-3 border-t border-slate-200/60 dark:border-darkmode-400"
        >
          <Tippy
            tag="a"
            href=""
            class="intro-x w-8 h-8 flex items-center justify-center rounded-full border border-slate-300 dark:border-darkmode-400 dark:bg-darkmode-300 dark:text-slate-300 text-slate-500 mr-2"
            content="Bookmark"
          >
            <BookmarkIcon class="w-3 h-3" />
          </Tippy>
          <div class="intro-x flex mr-2">
            <div class="intro-x w-8 h-8 image-fit">
              <Tippy
                tag="img"
                alt="Midone Tailwind HTML Admin Template"
                class="rounded-full border border-white zoom-in"
                :src="faker.photos[0]"
                :content="faker.users[0].name"
              />
            </div>
            <div class="intro-x w-8 h-8 image-fit -ml-4">
              <Tippy
                tag="img"
                alt="Midone Tailwind HTML Admin Template"
                class="rounded-full border border-white zoom-in"
                :src="faker.photos[1]"
                :content="faker.users[1].name"
              />
            </div>
            <div class="intro-x w-8 h-8 image-fit -ml-4">
              <Tippy
                tag="img"
                alt="Midone Tailwind HTML Admin Template"
                class="rounded-full border border-white zoom-in"
                :src="faker.photos[2]"
                :content="faker.users[2].name"
              />
            </div>
          </div>
          <Tippy
            tag="a"
            href=""
            class="intro-x w-8 h-8 flex items-center justify-center rounded-full text-primary bg-primary/10 dark:bg-darkmode-300 dark:text-slate-300 ml-auto"
            content="Share"
          >
            <Share2Icon class="w-3 h-3" />
          </Tippy>
          <Tippy
            tag="a"
            href=""
            class="intro-x w-8 h-8 flex items-center justify-center rounded-full bg-primary text-white ml-2"
            content="Download PDF"
          >
            <ShareIcon class="w-3 h-3" />
          </Tippy>
        </div>
        <div
          class="px-5 pt-3 pb-5 border-t border-slate-200/60 dark:border-darkmode-400"
        >
          <div class="w-full flex text-slate-500 text-xs sm:text-sm">
            <div class="mr-2">
              Comments: <span class="font-medium">{{ faker.totals[0] }}</span>
            </div>
            <div class="mr-2">
              Views: <span class="font-medium">{{ faker.totals[1] }}k</span>
            </div>
            <div class="ml-auto">
              Likes: <span class="font-medium">{{ faker.totals[2] }}k</span>
            </div>
          </div>
          <div class="w-full flex items-center mt-3">
            <div class="w-8 h-8 flex-none image-fit mr-3">
              <img
                alt="Midone Tailwind HTML Admin Template"
                class="rounded-full"
                :src="faker.photos[0]"
              />
            </div>
            <div class="flex-1 relative text-slate-600">
              <input
                type="text"
                class="form-control form-control-rounded border-transparent bg-slate-100 pr-10"
                placeholder="Post a comment..."
              />
              <SmileIcon
                class="w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0"
              />
            </div>
          </div>
        </div>
      </div>
      <!-- END: Blog Layout -->
    </div>
  </div>
  <!-- END : ListItemType_2 -->

  <!-- BEGIN : ListItemType_3 -->
  <div>
    <h2 class="intro-y text-4xl font-medium mt-10 text-center">Product Grid</h2>
    <div class="grid grid-cols-12 gap-6 mt-5">
      <!-- BEGIN: Users Layout -->
      <div
        v-for="(faker, fakerKey) in $_.take($f(), 3)"
        :key="fakerKey"
        class="intro-y col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-4"
      >
        <div class="box">
          <div class="p-5">
            <div
              class="h-40 2xl:h-56 image-fit rounded-md overflow-hidden before:block before:absolute before:w-full before:h-full before:top-0 before:left-0 before:z-10 before:bg-gradient-to-t before:from-black before:to-black/10"
            >
              <img
                alt="Midone - HTML Admin Template"
                class="rounded-md"
                :src="faker.images[0]"
              />
              <span
                v-if="faker.trueFalse[0]"
                class="absolute top-0 bg-pending/80 text-white text-xs m-5 px-2 py-1 rounded z-10"
                >Featured</span
              >
              <div class="absolute bottom-0 text-white px-5 pb-6 z-10">
                <a href="" class="block font-medium text-base">{{
                  faker.products[0].name
                }}</a>
                <span class="text-white/90 text-xs mt-3">{{
                  faker.products[0].category
                }}</span>
              </div>
            </div>
            <div class="text-slate-600 dark:text-slate-500 mt-5">
              <div class="flex items-center">
                <LinkIcon class="w-4 h-4 mr-2" /> Price: ${{ faker.totals[0] }}
              </div>
              <div class="flex items-center mt-2">
                <LayersIcon class="w-4 h-4 mr-2" /> Remaining Stock:
                {{ faker.stocks[0] }}
              </div>
              <div class="flex items-center mt-2">
                <CheckSquareIcon class="w-4 h-4 mr-2" /> Status:
                {{ faker.trueFalse[0] ? "Active" : "Inactive" }}
              </div>
            </div>
          </div>
          <div
            class="flex justify-center lg:justify-end items-center p-5 border-t border-slate-200/60 dark:border-darkmode-400"
          >
            <a
              class="flex items-center text-primary mr-auto"
              href="javascript:;"
            >
              <EyeIcon class="w-4 h-4 mr-1" /> Preview
            </a>
            <a class="flex items-center mr-3" href="javascript:;">
              <CheckSquareIcon class="w-4 h-4 mr-1" /> Edit
            </a>
            <a
              class="flex items-center text-danger"
              href="javascript:;"
              @click="deleteConfirmationModal = true"
            >
              <Trash2Icon class="w-4 h-4 mr-1" /> Delete
            </a>
          </div>
        </div>
      </div>
      <!-- END: Users Layout -->
    </div>
    <!-- BEGIN: Delete Confirmation Modal -->
    <Modal
      :show="deleteConfirmationModal"
      @hidden="deleteConfirmationModal = false"
    >
      <ModalBody class="p-0">
        <div class="p-5 text-center">
          <XCircleIcon class="w-16 h-16 text-danger mx-auto mt-3" />
          <div class="text-3xl mt-5">Are you sure?</div>
          <div class="text-slate-500 mt-2">
            Do you really want to delete these records? <br />This process
            cannot be undone.
          </div>
        </div>
        <div class="px-5 pb-8 text-center">
          <button
            type="button"
            @click="deleteConfirmationModal = false"
            class="btn btn-outline-secondary w-24 mr-1"
          >
            Cancel
          </button>
          <button type="button" class="btn btn-danger w-24">Delete</button>
        </div>
      </ModalBody>
    </Modal>
    <!-- END: Delete Confirmation Modal -->
  </div>
  <!-- END : ListItemType_2 -->

  <div></div>
</template>

<script setup></script>
