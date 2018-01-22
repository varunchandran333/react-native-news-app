// import React from 'react';
// import { View, Image, Text, ActivityIndicator } from 'react-native';
// import Carousel from 'react-native-carousel'

// export function Latest() {
//     return (
//         <View style={{height:220}}>
//             <Carousel delay={10000} indicatorOffset={-16} indicatorColor='orange' inactiveIndicatorColor='rgba(255,255,255,0.5)' indicatorAtBottom={false}>
//                 {/* <ActivityIndicator animating={true} size='large' style={{flex:1,alignSelf:'center'}}></ActivityIndicator> */}
//                 {/* <View style={styles.container}>
//                 <Image style={{ alignSelf: 'stretch', flex: 1, width: null, height: null }} source={{ uri: 'https://www.bmw.com/content/dam/bmw/common/all-models/4-series/gran-coupe/2017/images-and-videos/images/BMW-4-series-gran-coupe-images-and-videos-1920x1200-10.jpg.asset.1487328157424.jpg' }}>
//                     <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,.1)', paddingHorizontal: 16 }}>
//                         <Text style={{ fontSize: 16, color: '#fff', top: 20, fontWeight: '300', maxWidth: 150 }}>{'Building the next app'.toUpperCase()}</Text>
//                     </View>
//                 </Image>
//             </View> */}
//                 <News img='https://tctechcrunch2011.files.wordpress.com/2017/07/81nphvi3uclsl1500.jpg?w=764&h=400&crop=1' source='Wired US' title='Amidst probe of alleged sexual misconduct, AngelList partner Lee Jacobs on leave' />
//                 <News img='https://tctechcrunch2011.files.wordpress.com/2017/07/81nphvi3uclsl1500.jpg?w=764&h=400&crop=1' source='Wired US' title='Amidst probe of alleged sexual misconduct, AngelList partner Lee Jacobs on leave' />
//                 <News img='https://tctechcrunch2011.files.wordpress.com/2017/07/81nphvi3uclsl1500.jpg?w=764&h=400&crop=1' source='Wired US' title='Amidst probe of alleged sexual misconduct, AngelList partner Lee Jacobs on leave' />
//             </Carousel>
//         </View>
//     )
// }

// const styles = {
//     news: {
//         height: 220,
//         flex: 1
//     },
//     news_bg_image: {
//         alignSelf: 'stretch',
//         flex: 1,
//         width: null,
//         height: null
//     },
//     news_txt: {
//         flex: 1,
//         backgroundColor: 'rgba(0,0,0,.2)',
//         paddingLeft: 16,
//     },
//     news_category: {
//         backgroundColor: 'orange',
//         maxWidth: 100,
//         padding: 4,
//         borderRadius: 100,
//         top: 32
//     },
//     news_category_text: {
//         alignSelf: 'center',
//         color: '#fff'
//     },
//     news_title: {
//         flex: 1,
//         color: '#fff',
//         fontSize: 24,
//         lineHeight: 32,
//         top: 40,
//         textShadowColor: '#222',
//         textShadowOffset: { width: 4, height: 2 },
//         textShadowRadius: 2,
//         fontFamily: 'RobotoSlab'
//     },
//     news_source: {
//         flexDirection: 'row',
//         maxWidth: 124,
//         top: -32,
//         padding: 4,
//         backgroundColor: '#222',
//         alignItems: 'center',
//         borderRadius: 100
//     },
//     news_source_logo: {
//         height: 32,
//         width: 32,
//         borderRadius: 100
//     },
//     news_source_name: {
//         flex: .6,
//         fontSize: 13,
//         color: 'rgba(255,255,255,.85)',
//         left: 8
//     }
// }

// function News(props) {
//     return (
//         <View style={styles.news}>
//             <Image style={styles.news_bg_image} source={{ uri: props.img }}>
//                 <View style={styles.news_txt}>
//                     <View style={styles.news_category}>
//                         <Text style={styles.news_category_text}>Technology</Text>
//                     </View>
//                     <Text style={styles.news_title} numberOfLines={2} ellipsizeMode='tail' >{props.title}</Text>
//                     <View style={styles.news_source}>
//                         <Image style={styles.news_source_logo} source={{ uri: props.img }}></Image>
//                         <Text style={styles.news_source_name}>{props.source}</Text>
//                     </View>
//                     <Text style={{ position: 'absolute', color: 'rgba(255,255,255,1)', right: 16, bottom: 40 }}>3 hr ago</Text>
//                 </View>
//             </Image>
//         </View>
//     )
// }