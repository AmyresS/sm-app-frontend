<template>
  <div class="chat-information">
    <div class="top-block">
      <img class="avatar" src="../assets/images/16.png" alt="" />
      <div class="name">Some group name ({{ selectedChat }})</div>
      <div class="description">
        This is a test group for testing the design of the messenger on different screen sizes, etc.
      </div>
    </div>

    <hr />

    <div class="members">
      <div class="member">
        <img src="../assets/images/photo_2024-05-03_02-58-25.jpg" alt="" class="user-avatar" />
        <div class="name">AmyresS</div>
        <div class="role">Admin</div>
        <div class="messageTo"></div>
      </div>
      <div class="member">
        <img src="../assets/images/avatar2.jpg" alt="" class="user-avatar" />
        <div class="name">Test User</div>
        <div class="role">Member</div>
        <div class="messageTo"></div>
      </div>
      <div class="member">
        <img src="../assets/images/avatar3.jpg" alt="" class="user-avatar" />
        <div class="name">Test User2</div>
        <div class="role">Member</div>
        <div class="messageTo"></div>
      </div>
      <div class="member">
        <img src="../assets/images/avatar2.jpg" alt="" class="user-avatar" />
        <div class="name">Test User3</div>
        <div class="role">Member</div>
        <div class="messageTo"></div>
      </div>
      <div class="member">
        <img src="../assets/images/avatar3.jpg" alt="" class="user-avatar" />
        <div class="name">Test User4</div>
        <div class="role">Member</div>
        <div class="messageTo"></div>
      </div>
      <div class="member">
        <img src="../assets/images/avatar2.jpg" alt="" class="user-avatar" />
        <div class="name">Test User3</div>
        <div class="role">Member</div>
        <div class="messageTo"></div>
      </div>
      <div class="member">
        <img src="../assets/images/avatar3.jpg" alt="" class="user-avatar" />
        <div class="name">Test User4</div>
        <div class="role">Member</div>
        <div class="messageTo"></div>
      </div>
      <div class="member">
        <img src="../assets/images/avatar3.jpg" alt="" class="user-avatar" />
        <div class="name">Test User5</div>
        <div class="role">Member</div>
        <div class="messageTo"></div>
      </div>
      <div class="member">
        <img src="../assets/images/avatar2.jpg" alt="" class="user-avatar" />
        <div class="name">Test User6</div>
        <div class="role">Member</div>
        <div class="messageTo"></div>
      </div>
      <div class="member">
        <img src="../assets/images/avatar3.jpg" alt="" class="user-avatar" />
        <div class="name">Test User7</div>
        <div class="role">Member</div>
        <div class="messageTo"></div>
      </div>
      <div class="member">
        <img src="../assets/images/avatar2.jpg" alt="" class="user-avatar" />
        <div class="name">Test User8</div>
        <div class="role">Member</div>
        <div class="messageTo"></div>
      </div>
    </div>

    <hr />

    <div class="tools">
      <div class="chat-edit">
        <svg version="1.1" viewBox="0 0 490.273 490.273">
          <g>
            <path
              d="M313.548,152.387l-230.8,230.9c-6.7,6.7-6.7,17.6,0,24.3c3.3,3.3,7.7,5,12.1,5s8.8-1.7,12.1-5l230.8-230.8
				c6.7-6.7,6.7-17.6,0-24.3C331.148,145.687,320.248,145.687,313.548,152.387z"
            />
            <path
              d="M431.148,191.887c4.4,0,8.8-1.7,12.1-5l25.2-25.2c29.1-29.1,29.1-76.4,0-105.4l-34.4-34.4
				c-14.1-14.1-32.8-21.8-52.7-21.8c-19.9,0-38.6,7.8-52.7,21.8l-25.2,25.2c-6.7,6.7-6.7,17.6,0,24.3l115.6,115.6
				C422.348,190.187,426.748,191.887,431.148,191.887z M352.948,45.987c7.6-7.6,17.7-11.8,28.5-11.8c10.7,0,20.9,4.2,28.5,11.8
				l34.4,34.4c15.7,15.7,15.7,41.2,0,56.9l-13.2,13.2l-91.4-91.4L352.948,45.987z"
            />
            <path
              d="M162.848,467.187l243.5-243.5c6.7-6.7,6.7-17.6,0-24.3s-17.6-6.7-24.3,0l-239.3,239.5l-105.6,14.2l14.2-105.6
				l228.6-228.6c6.7-6.7,6.7-17.6,0-24.3c-6.7-6.7-17.6-6.7-24.3,0l-232.6,232.8c-2.7,2.7-4.4,6.1-4.9,9.8l-18,133.6
				c-0.7,5.3,1.1,10.6,4.9,14.4c3.2,3.2,7.6,5,12.1,5c0.8,0,1.5-0.1,2.3-0.2l133.6-18
				C156.748,471.587,160.248,469.887,162.848,467.187z"
            />
          </g>
        </svg>
        <p>edit</p>
      </div>
      <div class="user-invite">
        <svg version="1.1" viewBox="0 0 490 490">
          <g>
            <path
              d="M227.8,174.1v53.7h-53.7c-9.5,0-17.2,7.7-17.2,17.2s7.7,17.2,17.2,17.2h53.7v53.7c0,9.5,7.7,17.2,17.2,17.2
				s17.1-7.7,17.1-17.2v-53.7h53.7c9.5,0,17.2-7.7,17.2-17.2s-7.7-17.2-17.2-17.2h-53.7v-53.7c0-9.5-7.7-17.2-17.1-17.2
				S227.8,164.6,227.8,174.1z"
            />
            <path
              d="M71.7,71.7C25.5,118,0,179.5,0,245s25.5,127,71.8,173.3C118,464.5,179.6,490,245,490s127-25.5,173.3-71.8
				C464.5,372,490,310.4,490,245s-25.5-127-71.8-173.3C372,25.5,310.5,0,245,0C179.6,0,118,25.5,71.7,71.7z M455.7,245
				c0,56.3-21.9,109.2-61.7,149s-92.7,61.7-149,61.7S135.8,433.8,96,394s-61.7-92.7-61.7-149S56.2,135.8,96,96s92.7-61.7,149-61.7
				S354.2,56.2,394,96S455.7,188.7,455.7,245z"
            />
          </g>
        </svg>
        <p>invite</p>
      </div>
      <div class="pinned-messages">
        <svg version="1.1" viewBox="0 0 490.125 490.125">
          <g>
            <path
              d="M300.625,5.025c-6.7-6.7-17.6-6.7-24.3,0l-72.6,72.6c-6.7,6.7-6.7,17.6,0,24.3l16.3,16.3l-40.3,40.3l-63.5-7
				c-3-0.3-6-0.5-8.9-0.5c-21.7,0-42.2,8.5-57.5,23.8l-20.8,20.8c-6.7,6.7-6.7,17.6,0,24.3l108.5,108.5l-132.4,132.4
				c-6.7,6.7-6.7,17.6,0,24.3c3.3,3.3,7.7,5,12.1,5s8.8-1.7,12.1-5l132.5-132.5l108.5,108.5c3.3,3.3,7.7,5,12.1,5s8.8-1.7,12.1-5
				l20.8-20.8c17.6-17.6,26.1-41.8,23.3-66.4l-7-63.5l40.3-40.3l16.2,16.2c6.7,6.7,17.6,6.7,24.3,0l72.6-72.6c3.2-3.2,5-7.6,5-12.1
				s-1.8-8.9-5-12.1L300.625,5.025z M400.425,250.025l-16.2-16.3c-6.4-6.4-17.8-6.4-24.3,0l-58.2,58.3c-3.7,3.7-5.5,8.8-4.9,14
				l7.9,71.6c1.6,14.3-3.3,28.3-13.5,38.4l-8.7,8.7l-217.1-217.1l8.7-8.6c10.1-10.1,24.2-15,38.4-13.5l71.7,7.9
				c5.2,0.6,10.3-1.2,14-4.9l58.2-58.2c6.7-6.7,6.7-17.6,0-24.3l-16.3-16.3l48.3-48.3l160.3,160.3L400.425,250.025z"
            />
          </g>
        </svg>
        <p>pinned</p>
      </div>
      <div class="chat-leave">
        <svg version="1.1" viewBox="0 0 489.9 489.9">
          <g>
            <path
              d="M468.3,255.8c0.1-0.1,0.1-0.1,0.2-0.2c0.3-0.4,0.6-0.7,0.8-1.1c0.1-0.1,0.1-0.2,0.2-0.3c0.2-0.4,0.5-0.8,0.7-1.2
				c0-0.1,0.1-0.2,0.1-0.2c0.2-0.4,0.4-0.8,0.6-1.3c0-0.1,0-0.1,0.1-0.2c0.2-0.4,0.3-0.9,0.5-1.4c0-0.1,0-0.2,0.1-0.2
				c0.1-0.5,0.3-0.9,0.3-1.4c0-0.2,0-0.3,0.1-0.5c0.1-0.4,0.1-0.8,0.2-1.2c0.1-0.6,0.1-1.1,0.1-1.7c0-0.6,0-1.1-0.1-1.7
				c0-0.4-0.1-0.8-0.2-1.2c0-0.2,0-0.3-0.1-0.5c-0.1-0.5-0.2-0.9-0.3-1.4c0-0.1,0-0.2-0.1-0.2c-0.1-0.5-0.3-0.9-0.5-1.4
				c0-0.1,0-0.1-0.1-0.2c-0.2-0.4-0.4-0.9-0.6-1.3c0-0.1-0.1-0.2-0.1-0.2c-0.2-0.4-0.4-0.8-0.7-1.2c-0.1-0.1-0.1-0.2-0.2-0.3
				c-0.3-0.4-0.5-0.8-0.8-1.1c-0.1-0.1-0.1-0.1-0.2-0.2c-0.4-0.4-0.7-0.9-1.2-1.3l-98.9-98.8c-6.7-6.7-17.6-6.7-24.3,0
				c-6.7,6.7-6.7,17.6,0,24.3l69.6,69.6H136.8c-9.5,0-17.2,7.7-17.2,17.1c0,9.5,7.7,17.2,17.2,17.2h276.8l-69.1,69.1
				c-6.7,6.7-6.7,17.6,0,24.3c3.3,3.3,7.7,5,12.1,5s8.8-1.7,12.1-5l98.3-98.3C467.5,256.6,467.9,256.2,468.3,255.8z"
            />
            <path
              d="M110.7,34.3h128c9.5,0,17.2-7.7,17.2-17.1c0-9.5-7.7-17.2-17.2-17.2h-128C59.4,0,17.6,41.8,17.6,93.1v303.7
				c0,51.3,41.8,93.1,93.1,93.1h125.9c9.5,0,17.2-7.7,17.2-17.1c0-9.5-7.7-17.2-17.2-17.2H110.7c-32.4,0-58.8-26.4-58.8-58.8V93.1
				C52,60.6,78.3,34.3,110.7,34.3z"
            />
          </g>
        </svg>
        <p>leave</p>
      </div>
      <div class="user-delete">
        <svg viewBox="0 0 490 490">
          <defs />
          <g>
            <path
              d="M 315.8 227.8 L 174.1 227.8 C 164.6 227.8 156.9 235.5 156.9 245 C 156.9 254.5 164.6 262.2 174.1 262.2 L 315.8 262.2 C 325.3 262.2 333 254.5 333 245 C 333 235.5 325.3 227.8 315.8 227.8 Z"
            />
            <path
              d="M71.7,71.7C25.5,118,0,179.5,0,245s25.5,127,71.8,173.3C118,464.5,179.6,490,245,490s127-25.5,173.3-71.8&#10;&#9;&#9;&#9;&#9;C464.5,372,490,310.4,490,245s-25.5-127-71.8-173.3C372,25.5,310.5,0,245,0C179.6,0,118,25.5,71.7,71.7z M455.7,245&#10;&#9;&#9;&#9;&#9;c0,56.3-21.9,109.2-61.7,149s-92.7,61.7-149,61.7S135.8,433.8,96,394s-61.7-92.7-61.7-149S56.2,135.8,96,96s92.7-61.7,149-61.7&#10;&#9;&#9;&#9;&#9;S354.2,56.2,394,96S455.7,188.7,455.7,245z"
            />
          </g>
        </svg>
        <p>kick</p>
      </div>
      <div class="media">
        <svg viewBox="0 0 500 500">
          <g transform="matrix(1, 0, 0, 1, 4.196115970611572, 6.339756011962891)">
            <path
              d="M17.1,490h349.4c9.5,0,17.2-7.7,17.2-17.2v-89.2h89.2c9.5,0,17.1-7.7,17.1-17.1V17.1C490,7.6,482.3,0,472.9,0H123.5&#10;&#9;&#9;&#9;&#9;c-9.5,0-17.2,7.7-17.2,17.1v89.2H17.1C7.6,106.3,0,114,0,123.5v349.4C0,482.3,7.7,490,17.1,490z M140.6,34.3h315.1v315.1H140.6&#10;&#9;&#9;&#9;&#9;V34.3z M34.3,140.6h72v225.9c0,9.5,7.7,17.1,17.2,17.1h225.9v72H34.3V140.6z"
            />
            <path
              d="M 312.495 134.089 Q 327.541 108.361 342.586 134.089 L 406.53 243.432 Q 421.576 269.16 391.485 269.16 L 263.596 269.16 Q 233.505 269.16 248.551 243.432 Z"
              style="transform-box: fill-box; transform-origin: 50% 50%"
              transform="matrix(0, 1, -1, 0, -18.17592, 1.596416)"
            />
          </g>
        </svg>
        <p>media</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import '../assets/chatInfo.css';
</style>

<script setup>
const selectedChat = defineModel()
</script>
