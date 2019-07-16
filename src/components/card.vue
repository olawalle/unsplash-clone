<template>
    <div class="grid" @click="openModal">
        <b-modal id="modal-center" centered size="lg" v-model="show" :hide-header="true" :hide-footer="true">
            <div class="imgWrap">
                <img :src="data.urls.full" alt="" class="modalImg" style="width: 100%">
            </div>
            <div class="details">
                <p class="name">{{data.user.name}} </p>
                <p class="location">{{data.user.location}}</p>
            </div>
        </b-modal>
        <div class="card" v-if="!loading">
            <img :src="data.urls.full" alt="">
            <div class="text">
                <p class="name">{{data.user.name}} </p>
                <p class="location">{{data.user.location}}</p>
                <div class="overlay"></div>
            </div>
        </div>

        <div class="card" v-else>
            <div class="dummy">
                <p class="top"></p>
                <p class="btm"></p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  props: ['data', 'loading'],
  data() {
    return {
      show: false,
    };
  },
  methods: {
    openModal() {
      this.show = true;
      console.log(data);
    },
  },
};
</script>
<style lang="scss" scoped>
    .grid {
      display: inline-block;
      padding: 0px;
      margin-bottom: 8px;
        cursor: pointer;
        transition: linear all 0.4s;
        .card {
            flex-basis: 30%;
            overflow: hidden;
            margin: 10px 1.5%;
            border-radius: 5px;
            box-shadow: 0px 0px 10px rgba(99, 115, 129, 0.1);
            .overlay {
                background-image: linear-gradient(transparent, #000);
                opacity: 0.7;
                width: 100%;
                height: 80px;
                position: relative;
                top: -65px;
                z-index: 2;
            }
            .text {
                position: relative;
                z-index: 3;
                color: #fff;
                margin-top: -69px;
                height: 63px;
                text-align: left;
                .name {
                    font-size: 18px;
                }
                .location {
                    font-size: 12px
                }
                p {
                    margin: 0 10px;
                    position: relative;
                    z-index: 5;
                    height: 25px;
                }
            }
            img {
                width: 100%;
                height: auto;
                position: relative;
                top: 0px;
                z-index: 1;
            }
            .dummy {
                display: block;
                width: 320px;
                height: 400px;
                background-color: #eee;
                padding: 30px;
                .top {
                    width: 200px;
                    background-color: #c6c6c6 !important;
                    height: 10px;
                    position: relative;
                    top: 320px;
                }
                .btm {
                    width: 150px;
                    background-color: #c6c6c6 !important;
                    height: 10px;
                    position: relative;
                    top: 330px;
                }
            }
        }
    }
    .imgWrap {
        width: 100%;
        min-width: 100%;
        max-height: 85vh;
        overflow: auto;
    }
    .details {
        padding: 10px 20px;
        .name {
            color: #2b3875;
            font-size: 30px;
            margin: 0;
            font-size: 25px;
        }
        .location {
            color: #585858;
            font-size: 14px;
        }
    }
    .grid:hover {
        transform: scale(1.015);
    }
    @media (max-width: 767px){
        .grid {
            display: block !important;
            .card {
                display: block !important
            }
        }
    }
</style>
