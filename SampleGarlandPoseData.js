const imgScraperLister = require("./utilities/imgScraperUtil");
const deleteBadImgData = require("./utilities/deleteBadImgData");

const garlandPoseSamples =
  "https://www.yogajournal.com/.image/t_share/MTQ3MTU2ODk4Njc4ODQzMTgz/3enneagram_289_1310_bjk.jpg<br>https://www.gaia.com/wp-content/uploads/Header-GAIA_CAVEMANCOLLECTIVE-190-squat-pose-750x441-735x432.jpg<br>https://www.yogajournal.com/.image/t_share/MTQ2MTgwODI4NDQxMjkwMTcz/story-image-18477.jpg<br>https://www.aumyogashala.com/wp-content/uploads/2018/10/Health-benefits-of-Malasana-Garland-Pose-1024x682.jpg<br>https://www.yogaenlightened.com/wp-content/uploads/2014/10/image049.jpg<br>https://www.verywellfit.com/thmb/udxieH2sgZLUSGq7b4pVPmhiMVE=/1500x1000/filters:no_upscale():max_bytes(150000):strip_icc()/garlandpose_annotations-5c5d92c2c9e77c000159c344.jpg<br>http://yogasportlife.com/img/pose/garland.jpg<br>https://emmanewlynyoga.files.wordpress.com/2014/08/eka-pada-malasana.jpg<br>https://www.yogauonline.com/sites/default/files/styles/wellness_blog_level3_main/public/article_images/fotolia_64211515_subscription_xxl.jpg?itok=v3b5FEMU<br>https://images.cdn-outlet.com/yo-images/guide/yoga/15511005112011110951.jpg<br>https://fitnessgoals.com/wp-content/uploads/2016/09/garland-pose-prop-2.jpg<br>https://www.yogamerge.com/blogphotos/daniela-malasana-pose.jpg<br>http://1.bp.blogspot.com/-yuLH3GOMQzA/ViBQuVKnHvI/AAAAAAAAAQI/G_jwVb1yJKg/s1600/kd.malasana.jpg<br>https://www.verywellfit.com/thmb/cJtfWd2XPoQkIUmQAemxDsLAVJM=/1500x1000/filters:fill(FFDB5D,1)/Verywell-4-3567193-GarlandPose02-661-598b666103f4020010b46e15.gif<br>https://static1.squarespace.com/static/5008a3c6c4aa6450352d2303/t/552fc672e4b0fdeb54bfb7f7/1429194359324/<br>https://i.ytimg.com/vi/HnM6kfwhzd0/maxresdefault.jpg<br>https://c8.alamy.com/comp/MD659G/young-woman-doing-yoga-asana-eka-pada-malasana-one-legged-garland-pose-isolated-on-white-background-MD659G.jpg<br>https://yogaposesguide.com/wp-content/uploads/2018/04/palomahuner-960x1200.jpg<br>https://www.sarvyoga.com/wp-content/uploads/2016/12/Malasana-Garland-Pose-yoga-steps.jpg<br>https://2.bp.blogspot.com/-6S22IWtPzMU/UqcRXzFo23I/AAAAAAAADQ8/gr6Gjagfewk/s640/Hip+Opening+Yoga+Poses+Garland+Pose.jpg<br>https://i.pinimg.com/originals/84/0d/11/840d11b171a5629fbabab530579eeb99.jpg<br>https://thumbs.dreamstime.com/z/malasana-yoga-pose-sporty-smiling-beautiful-young-woman-white-sportswear-sitting-squat-garland-hands-namaste-studio-57183616.jpg<br>https://fitnessgoals.com/wp-content/uploads/2016/09/Garland-teaser.png<br>https://workouttrends.imgix.net/2014/03/Yoga-Poses-Garland-Pose-Malasana.jpg?auto=compress,format&amp;fit=crop&amp;h=1150&amp;ixlib=php-1.2.1&amp;w=1150&amp;wpsize=stylemag-single-featured-column&amp;s=b5df3e3d54e00b626549f010cb9f85db<br>http://www.yogabasics.com/yogabasics2017/wp-content/uploads/1970/01/IMGP3314.jpg<br>https://lifenlesson.com/wp-content/uploads/2017/03/garland-pose.jpg<br>http://wholebeginnings.com/wp-content/uploads/2015/06/Screen-Shot-2015-06-18-at-9.00.47-AM.png<br>https://www.awaken.com/wp-content/uploads/2014/12/Screen-Shot-2014-12-09-at-6.18.jpg<br>https://beyogi.com/wp-content/uploads/2015/03/Garland-Pose-Malasana.png<br>https://yogaposesguide.com/wp-content/uploads/2018/04/gladysmduarte-620x620.jpg<br>https://i.ytimg.com/vi/IXpJEqssze8/maxresdefault.jpg<br>https://fitnessgoals.com/wp-content/uploads/2016/09/garland-pose-prop-1.jpg<br>https://thumbs.dreamstime.com/z/pregnant-young-woman-doing-prenatal-yoga-garland-malasana-pose-pregnancy-fitness-concept-portrait-beautiful-model-working-73377894.jpg<br>https://i2.wp.com/yogaanatomyacademy.com/wp-content/uploads/2018/10/ankle-mobility-for-malasana.png?fit=660,371&amp;ssl=1<br>https://media.istockphoto.com/photos/yoga-teacher-performing-garland-pose-malasana-asana-in-white-studio-picture-id859635200<br>https://static1.squarespace.com/static/53763e26e4b08004714f4961/t/59260e262994ca89de68e860/1495666317197/malasana.jpg?format=750w<br>http://www.edgemagazine.net/wp-content/uploads/2014/11/ploog.jpg<br>https://previews.123rf.com/images/fizkes/fizkes1701/fizkes170100587/70374352-girl-child-practicing-yoga-stretching-in-malasana-exercise-garland-pose-working-out-wearing-sportswe.jpg<br>https://1.bp.blogspot.com/-wwvK4AMqQz4/UpKvo9MH9oI/AAAAAAAAJQ0/gGSVpK3YgCA/s1600/90.jpg<br>http://www.jaisiyaram.com/photopost/watermark.php?file=15937<br>https://as1.ftcdn.net/jpg/02/23/37/68/500_F_223376801_0OKf2Dof1WBe01paCE3nPlYMtjsS1oKr.jpg<br>https://thumbs.dreamstime.com/z/malasana-garland-pose-girl-black-clothes-doing-yoga-asana-relaxation-82919878.jpg<br>https://i.pinimg.com/originals/d7/6b/04/d76b045da9a516de3998b6a22431ba21.jpg<br>http://www.yogicwayoflife.com/wp-content/uploads/2016/10/Malasana_Garland_Pose_Asana_Yoga.jpg<br>http://mryoga.com/wp-content/uploads/2015/03/Garland-Pose-Malasana.jpg<br>https://www.yogateket.com/image/original/malasanapose.jpg<br>https://yogauonline.com/sites/default/files/styles/wellness_blog_level3_main/public/article_images/refine_your_yoga_practice_5_easy_fixes_for_malasana_1.png?itok=_1bRk4iR<br>https://www.yogajournal.com/.image/t_share/MTQ2MTgwNjcyNzU2ODUyMTU3/yogapedia_278_01_fnl-malasana.jpg<br>https://www.ritualflow.com/wp-content/uploads/2017/06/garland-pose-567x567.png<br>https://muselan.typepad.com/.a/6a0105361d3ce2970b017c353cff8a970b-320wi<br>https://i.pinimg.com/originals/13/22/11/13221130d7e9aa5bdf982e735c7a7488.jpg<br>https://www.yogajournal.com/.image/t_share/MTQ2MTgwODI4NDQxNTUyMzE3/image-placeholder-title.jpg<br>https://i.ytimg.com/vi/goJthOXs9ZU/maxresdefault.jpg<br>https://s3.amazonaws.com/tummee/garland_pose_against_wall__malasana_against_wall_yoga.png<br>https://i2.wp.com/ericarascon.com/wp-content/uploads/2015/10/malasana-e1444245654168.png<br>https://pbs.twimg.com/media/DKtw9n0VwAErkwX.jpg<br>https://i0.wp.com/yogalily.com/tuzi/wp-content/uploads/2014/08/Garland-Pose-Malasana-Feature.jpg?fit=750,380&amp;ssl=1<br>https://i.pinimg.com/236x/31/90/af/3190af4dc83f775068a4b0fc179312ec.jpg<br>https://st2.depositphotos.com/3386033/11484/i/950/depositphotos_114844934-stock-photo-yoga-garland-pose-malasana.jpg<br>http://nourishingstorm.com/wp-content/uploads/2018/04/21034472_10100205258532771_1040316628496311928_n-e1523030056922.jpg<br>https://static1.squarespace.com/static/5b33a3972714e5a3a3f6be11/t/5b56dfd38a4134dabfb76109/1532427474764/octoberpose-300x300.jpg<br>https://www.yogatoday.com/files/images/uploads/poses/PDGD092_3F7A7755.jpg_.jpg<br>https://i.ytimg.com/vi/R1My3J2ujDY/maxresdefault.jpg<br>https://image.shutterstock.com/image-vector/beautiful-girl-doing-yoga-sitting-450w-1236421675.jpg<br>https://liforme.com/blog/wp-content/uploads/2019/02/09-Blog-Garland-pose.jpg<br>https://i.pinimg.com/originals/75/c0/78/75c078df1370e3a1c27509f5d1709899.jpg<br>https://7pranayama.com/wp-content/uploads/2018/09/malasanagarland.jpg<br>https://emmanewlynyoga.files.wordpress.com/2014/07/malasana-front.jpg<br>https://thumbs.dreamstime.com/z/garland-malasana-pose-sporty-beautiful-young-woman-practicing-yoga-sitting-squat-stretching-back-muscles-hips-ankles-working-66274907.jpg<br>https://www.yogajournal.com/.image/t_share/MTQ2MTgwNzA2NTcyMTgyOTcz/kathrynbudigmalasana.jpg<br>https://s3.amazonaws.com/tummee/garland_pose_with_block_under_hips__malasana_with_block_under_hips_yoga.png<br>https://i.ytimg.com/vi/R_eSKlyCqbs/maxresdefault.jpg<br>https://i.ytimg.com/vi/GiTyW2FEruk/maxresdefault.jpg<br>https://www.yogidia.com/s3/yogidia/asanas/asana_120.jpg?autorotate=true&amp;w=1000&amp;h=1000<br>http://allyogapositions.com/wp-content/uploads/2016/07/malasana-pose-yoga_2.jpg<br>https://thumbs.dreamstime.com/z/sporty-man-practicing-yoga-squat-garland-pose-malasana-sitting-72532170.jpg<br>https://www.yogatoday.com/files/images/uploads/made/files/images/uploads/poses/PD030SK_White_Steph_LowSquat_018Q54162018_WEB_1300_725_s_c1.jpg<br>https://c8.alamy.com/comp/HFR0HC/young-woman-in-malasana-pose-grey-studio-background-HFR0HC.jpg<br>http://dropkickdebra.com/wp-content/uploads/2018/01/garlandpose.jpg<br>https://roxdoesyoga.files.wordpress.com/2012/02/dsc_0217.jpg<br>https://s3.amazonaws.com/tummee/bound_garland_pose_flow__baddha_malasana_vinyasa_yoga.png<br>https://www.aliveyogi.com/wp-content/uploads/2018/06/matt-krieg-488415-unsplash-1080x675.jpg<br>http://www.jillpaschalyoga.com/uploads/4/8/8/6/4886635/published/benefits-of-malasana.png?1517502917<br>https://www.wikihow.com/images/9/9b/Do-the-Garland-Pose-in-Yoga-Step-13-Version-3.jpg<br>https://i2.wp.com/www.healthlogus.com/wp-content/uploads/malasana-2.jpg?fit=600,315&amp;ssl=1<br>https://www.yogauonline.com/sites/default/files/styles/wellness_blog_level3_main/public/fotolia_33829443_subscription_l_0.jpg?itok=fqWb7C5V<br>https://www.yogaclassplan.com/wp-content/uploads/2016/08/iStock_72632807_MEDIUM.jpg<br>https://cdn.shopify.com/s/files/1/0064/9962/products/st9726947029_5f51b9b76a_z.jpg?v=1546749434<br>https://i.pinimg.com/236x/2a/67/09/2a67091d3a7face50be786cf0200d68c--health-benefits-benefits-of.jpg<br>https://i.ytimg.com/vi/a83YCRqI_Zo/hqdefault.jpg<br>https://www.siddhiyoga.com/wp-content/uploads/2018/04/Squat-Pose-Malasana.jpg<br>https://yogaposesguide.com/wp-content/uploads/2018/04/rklovestruck-960x960.jpg<br>https://static1.squarespace.com/static/53c723f0e4b057b2aaf90c0f/552de429e4b0a781151b1172/552de42ae4b02828ddd1ca9b/1429070891255/116-malasana-1-yoga-pose-iyengar.jpg<br>https://i.ytimg.com/vi/47N-4i-xNZE/maxresdefault.jpg<br>https://i1.wp.com/yogaanatomyacademy.com/wp-content/uploads/2017/03/IMG_1330.jpg?resize=300,279&amp;ssl=1<br>https://emmanewlynyoga.files.wordpress.com/2014/07/malasana-full.jpg<br>https://www.yogamerge.com/images/malasana-pose-home-image.jpg<br>https://fitnessgoals.com/wp-content/uploads/2016/09/Garland-Pose.png<br>https://acewebcontent.azureedge.net/certifiednews/December_2010/March2011/GarlandMain.jpg<br>https://www.yogaflavoredlife.com/wp-content/uploads/2009/08/squat-malasana.jpg<br>";

let garlandPoseArrayOfUrls = imgScraperLister(garlandPoseSamples);

const idxToRemove = [
  2,
  4,
  5,
  7,
  8,
  13,
  14,
  16,
  17,
  18,
  25,
  33,
  34,
  35,
  38,
  40,
  41,
  42,
  44,
  45,
  47,
  49,
  51,
  53,
  58,
  61,
  66,
  68,
  70,
  71,
  75,
  76,
  81,
  82,
  85,
  92,
  93,
  95,
  100
];

const garlandPoseUrls = deleteBadImgData(idxToRemove, garlandPoseArrayOfUrls);

// export default garlandPoseArrayOfUrls;
export default garlandPoseUrls;
