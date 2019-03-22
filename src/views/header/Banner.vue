<template>
  <div class="banner">
    <section class="content">
      <h1 class="title">2018 ICBC - IBM全国大学生金融科技创新大赛</h1>
      <ul class="unit-list">
        <li class="unit-item">
          <label class="label">发起单位：</label>
          <span class="text">是的范德萨范德萨发的是</span>
        </li>
        <li class="unit-item">
          <label class="label">主办单位：</label>
          <span class="text">是的范德萨范德萨发的是</span>
        </li>
        <li class="unit-item">
          <label class="label">承办单位：</label>
          <span class="text">是的范德萨范德萨发的是</span>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
  @import "../../assets/style/var";
  .banner{
    margin-top: $nav-height;;
    position: relative;
    height: 600px;
    background-image: url("../../assets/image/banner.jpeg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    .content{
      position: absolute;
      left: 200px;
      bottom: 100px;
      color: #fff;
      .title{
        font-size: 40px;
        font-weight: bold;
      }
      .unit-list{
        margin-top: 30px;
        font-size: 14px;
        .unit-item{
          &:not(:first-child){
            margin-top: 30px;
          }
          .label{
            font-weight: bold;
          }
        }
      }
    }
  }
</style>
