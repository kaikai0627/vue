<template>
    <div>
        <div class="messages-group">
            <div class="messages-title">台风云雀预警</div>
            <div class="messages-detail">
                据中央电视台2018年02日10时发布台风蓝色预警，今年第12号台风云雀预计将于2018年8月3号早晨至中午与浙江象山委屈翁群二王企鹅群翁恶趣味
            </div>
            <div class="read text-right">
                <router-link to="/personal/message/system/detail">阅读全文</router-link>
            </div>
        </div>
        <div class="messages-group">
            <div class="messages-title">台风云雀预警</div>
            <div class="messages-detail">
                据中央电视台2018年02日10时发布台风蓝色预警，今年第12号台风云雀预计将于2018年8月3号早晨至中午与浙江象山委屈翁群二王企鹅群翁恶趣味
            </div>
            <div class="read text-right">
                <router-link to="/personal/message/system/detail">阅读全文</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SystemContent'
    }
</script>

<style lang="stylus" type="text/stylus" scoped>
    .messages-group {
        padding: 0 .34rem;
        background: #fff;
        margin-top: .1rem;
        line-height: .4rem;

        .messages-title {
            font-size: .3rem;
            padding: .2rem 0;
            border-bottom: 1px solid #E5E5E5;
        }

        .messages-detail {
            color: #666;
            padding: .1rem 0;
            font-size: .24rem;
            border-bottom: 1px solid #E5E5E5;
            overflow: hidden;
            height: .98rem;
            white-space: normal;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }

        .read {
            padding: .15rem 0;

            a {
                color: #2A7AD3;
            }
        }
    }


</style>
