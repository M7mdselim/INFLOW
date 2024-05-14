import HomeHeader from "../Header/HomeHeader";

import classes from "./BookMeeting.module.css";

import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import { Button, Grid, Link } from '@mui/material';
import online from '../../assets/online.png';
import offline from '../../assets/offline.png';
import { Paper } from "@material-ui/core";
import FAQsButton from '../FAQs/FAQsButton';

const BookMeeting = () => {

    const navigate = useNavigate();

    const resultBtn = () => {
        navigate("/results");
    };

    const coachBtn = () => {
        navigate("/coach");
    };

    useEffect(() => {
        // Scroll to the top of the page when the component is mounted
        window.scrollTo(0, 0);
    }, []);


    return (
        <div>
            <HomeHeader />
            <FAQsButton/>
            <div className={classes.bookmeeting}>
                <h1>How do you want to continue your journey with us?</h1>
                <div className={classes.content}>
                    <Grid container direction="row">

                        {/* back to result button */}
                        <Grid xs={12} xl={2} md={1.4}>
                            <button className={classes.resultsbtn} onClick={resultBtn}>
                                <svg width="91" height="91" viewBox="0 0 161 161" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M101.896 117.612H96.6467L95.8848 110.316C102.338 107.483 107.889 102.92 111.928 97.1279C115.966 91.3358 118.337 84.5385 118.78 77.4823C118.875 75.9567 118.945 74.5684 118.992 73.2929C121.779 72.7846 124.291 71.2898 126.073 69.08C127.855 66.8702 128.788 64.0921 128.703 61.2504C128.715 59.5666 128.389 57.8976 127.747 56.3422C127.105 54.7868 126.158 53.3766 124.963 52.1951C129.043 30.2768 121.785 19.7095 117.004 15.3449C112.81 11.5155 107.532 9.64763 103.139 10.3377C99.2597 6.66859 84.5151 -4.98811 60.1802 2.40991C55.3516 3.82273 50.8932 6.28791 47.123 9.62955C43.3528 12.9712 40.3637 17.107 38.369 21.7417C34.1646 31.1733 33.6869 42.5434 37.0063 51.3556C35.5229 52.5361 34.3278 54.0413 33.5122 55.7561C32.6965 57.4709 32.2818 59.3502 32.2998 61.2504C32.2147 64.0921 33.1478 66.8702 34.9297 69.08C36.7116 71.2898 39.224 72.7846 42.0105 73.2929C42.0579 74.5684 42.1283 75.9554 42.223 77.4809C42.6687 84.5342 45.0414 91.3279 49.0807 97.1165C53.1199 102.905 58.6697 107.465 65.1208 110.295L64.3562 117.612H59.1071C49.8687 117.622 41.0117 121.311 34.4792 127.869C27.9466 134.426 24.2721 143.317 24.2617 152.591V158.623C24.2621 159.253 24.5117 159.858 24.9557 160.303C25.3998 160.749 26.0019 161 26.6298 161H134.373C135.001 161 135.603 160.749 136.047 160.303C136.491 159.858 136.741 159.253 136.741 158.623V152.591C136.731 143.317 133.056 134.426 126.524 127.869C119.991 121.311 111.134 117.622 101.896 117.612ZM68.3225 131.879C70.4534 134.261 73.2304 135.966 76.3128 136.786C79.3952 137.606 82.6489 137.504 85.6749 136.495C88.7009 135.485 91.3675 133.611 93.3477 131.102C95.328 128.593 96.5356 125.558 96.8226 122.37H100.215C99.8729 126.743 98.1144 130.883 95.2082 134.159C93.353 136.225 91.0863 137.876 88.5548 139.007C86.0234 140.137 83.2836 140.721 80.5129 140.721C77.7423 140.721 75.0025 140.137 72.4711 139.007C69.9396 137.876 67.6729 136.225 65.8177 134.159C62.909 130.883 61.1473 126.742 60.8013 122.368H64.1965C64.5155 125.901 65.9626 129.238 68.3225 131.879ZM119.052 68.4405C118.931 63.5678 118.556 58.7048 117.929 53.8714C121.294 54.1009 123.972 57.3191 123.972 61.2517C124.035 62.8232 123.589 64.3728 122.701 65.6686C121.813 66.9643 120.531 67.9364 119.047 68.4392L119.052 68.4405ZM42.6925 23.6857C44.4167 19.6759 47.0015 16.0978 50.2623 13.2067C53.5232 10.3156 57.3796 8.1828 61.5564 6.96065C86.5909 -0.646564 100.062 13.909 100.618 14.5271C100.92 14.8666 101.312 15.112 101.748 15.2343C102.185 15.3567 102.647 15.3507 103.08 15.2172C105.509 14.4687 109.907 15.2919 113.82 18.8632C117.734 22.4345 123.619 31.1217 120.624 49.5746C119.627 49.2575 118.588 49.0949 117.542 49.0924C117.456 49.0924 117.371 49.1087 117.286 49.1114C117.209 48.5789 117.13 48.0369 117.055 47.5384C116.979 47.0411 116.748 46.5807 116.395 46.2236C116.042 45.8664 115.586 45.6309 115.091 45.551C107.656 44.4788 100.807 40.8964 95.671 35.394C95.3213 35.0243 94.8626 34.7772 94.3625 34.6889C93.8624 34.6006 93.3472 34.6759 92.8929 34.9036C79.7883 41.4865 62.3494 45.4994 46.2461 45.6352C45.6828 45.6398 45.1396 45.8459 44.714 46.2163C44.2884 46.5868 44.0083 47.0974 43.924 47.6565C43.8536 48.1198 43.7887 48.6251 43.7102 49.1182C43.6276 49.1182 43.5478 49.0992 43.4639 49.0992C42.7424 49.1007 42.0231 49.1781 41.3177 49.3301C38.6236 40.9025 39.113 31.7744 42.6925 23.6857ZM37.0361 61.2504C36.9986 59.8688 37.3415 58.5037 38.0273 57.3053C38.713 56.1069 39.7148 55.1217 40.9225 54.4582C40.9334 54.4582 40.9455 54.4514 40.9577 54.446C40.9699 54.4406 40.9875 54.427 41.0037 54.4188C41.654 54.1081 42.3569 53.9237 43.0755 53.8754C42.4515 58.7091 42.0775 63.5721 41.955 68.4446C40.4707 67.9403 39.1891 66.9667 38.3023 65.6697C37.4155 64.3727 36.9712 62.8221 37.0361 61.2504ZM46.9511 77.1861C46.7617 74.1623 46.671 71.6954 46.671 69.6455C46.7949 63.183 47.3447 56.7359 48.3165 50.3462C63.9076 49.9215 79.257 46.3745 93.4639 39.9135C98.724 45.0777 105.389 48.564 112.619 49.9333C113.631 56.4578 114.204 63.0435 114.332 69.6455C114.332 71.6954 114.241 74.1623 114.052 77.1889C113.505 85.7479 109.732 93.7767 103.5 99.6438C97.2683 105.511 89.0451 108.776 80.5014 108.776C71.9578 108.776 63.7345 105.511 57.5028 99.6438C51.271 93.7767 47.4983 85.7479 46.9511 77.1889V77.1861ZM80.5014 113.536C84.1553 113.538 87.7908 113.018 91.2988 111.992L92.0972 119.652C92.2666 121.283 92.0929 122.931 91.5873 124.49C91.0818 126.049 90.2556 127.484 89.1623 128.701C88.069 129.919 86.7331 130.893 85.241 131.56C83.7489 132.226 82.1339 132.571 80.5008 132.571C78.8676 132.571 77.2527 132.226 75.7606 131.56C74.2685 130.893 72.9325 129.919 71.8392 128.701C70.746 127.484 69.9198 126.049 69.4142 124.49C68.9086 122.931 68.7349 121.283 68.9044 119.652L69.7055 111.98C73.2117 113.013 76.8472 113.537 80.5014 113.536ZM132.005 156.245H28.998V152.591C29.0073 145.109 31.7771 137.895 36.7728 132.342C41.7685 126.789 48.636 123.29 56.0502 122.521C56.4406 128.017 58.6339 133.227 62.2871 137.339C65.5054 140.938 69.7103 143.504 74.3749 144.714C79.0395 145.925 83.9563 145.727 88.5091 144.145C93.0619 142.562 97.0483 139.666 99.9686 135.819C102.889 131.973 104.613 127.346 104.926 122.52C112.345 123.282 119.22 126.778 124.221 132.332C129.223 137.886 131.996 145.104 132.005 152.591V156.245Z" fill="#C6C6C6" />
                                    <path d="M119.224 132.088C118.741 131.683 118.116 131.486 117.488 131.541C116.86 131.596 116.279 131.898 115.874 132.381C115.469 132.863 115.272 133.487 115.327 134.115C115.381 134.742 115.684 135.323 116.167 135.728C117.691 137.007 119.036 138.485 120.167 140.122C120.344 140.379 120.57 140.598 120.833 140.768C121.095 140.937 121.388 141.053 121.695 141.11C122.003 141.166 122.318 141.161 122.623 141.096C122.929 141.03 123.218 140.905 123.475 140.728C123.732 140.55 123.952 140.324 124.121 140.062C124.291 139.8 124.407 139.507 124.463 139.2C124.519 138.893 124.515 138.578 124.449 138.273C124.384 137.968 124.258 137.679 124.081 137.422C122.708 135.435 121.075 133.641 119.224 132.088ZM92.4048 94.7703C92.9694 95.0448 93.6198 95.0851 94.214 94.8822C94.8081 94.6793 95.2979 94.2499 95.5763 93.6875C95.8548 93.1252 95.8993 92.4756 95.7001 91.8806C95.501 91.2856 95.0745 90.7934 94.5135 90.5115C90.106 88.5576 85.3223 87.5959 80.5015 87.6945C75.6806 87.5959 70.897 88.5576 66.4895 90.5115C65.9243 90.7911 65.4934 91.2836 65.2916 91.8806C65.0898 92.4777 65.1336 93.1304 65.4134 93.6951C65.6932 94.2598 66.1861 94.6904 66.7836 94.8921C67.3811 95.0937 68.0343 95.0499 68.5995 94.7703C72.3499 93.1381 76.412 92.3448 80.5015 92.4461C84.5913 92.3451 88.6539 93.1383 92.4048 94.7703ZM89.8764 65.3865L98.8083 68.6773C99.1013 68.7852 99.4128 68.8343 99.7249 68.8219C100.037 68.8095 100.343 68.7358 100.627 68.605C100.911 68.4742 101.166 68.2889 101.377 68.0596C101.589 67.8303 101.754 67.5616 101.862 67.2688C101.97 66.976 102.019 66.6647 102.007 66.3529C101.994 66.0411 101.92 65.7348 101.79 65.4515C101.659 65.1681 101.473 64.9133 101.244 64.7016C101.014 64.4899 100.745 64.3254 100.452 64.2176L95.811 62.5084L98.5963 60.5806C98.8598 60.4059 99.0858 60.1805 99.261 59.9175C99.4362 59.6545 99.5572 59.3592 99.6168 59.0489C99.6765 58.7386 99.6735 58.4195 99.6083 58.1104C99.543 57.8013 99.4166 57.5082 99.2366 57.2484C99.0566 56.9887 98.8266 56.7674 98.56 56.5976C98.2933 56.4277 97.9955 56.3127 97.6838 56.2593C97.3722 56.2059 97.053 56.2151 96.7449 56.2864C96.4369 56.3578 96.1462 56.4898 95.8898 56.6748L89.3465 61.2037C88.9885 61.4511 88.7055 61.792 88.5281 62.1891C88.3506 62.5863 88.2857 63.0244 88.3404 63.4559C88.395 63.8873 88.5672 64.2955 88.838 64.6359C89.1088 64.9763 89.468 65.236 89.8764 65.3865ZM72.6565 63.46C72.7115 63.0288 72.647 62.5906 72.47 62.1935C72.2929 61.7963 72.0101 61.4554 71.6524 61.2078L65.1077 56.6788C64.5892 56.3262 63.9522 56.1925 63.3356 56.307C62.7189 56.4214 62.1724 56.7747 61.8153 57.2899C61.4581 57.8051 61.3191 58.4405 61.4286 59.0576C61.5381 59.6747 61.8872 60.2236 62.3999 60.5847L65.1865 62.5124L60.5439 64.2217C59.9656 64.4496 59.4996 64.8947 59.2456 65.4616C58.9916 66.0286 58.9698 66.6724 59.1848 67.2552C59.3998 67.838 59.8346 68.3136 60.3962 68.5801C60.9577 68.8467 61.6013 68.883 62.1893 68.6814L71.1266 65.3865C71.5333 65.2354 71.8908 64.976 72.1604 64.6364C72.4301 64.2969 72.6017 63.8901 72.6565 63.46ZM160.726 23.1923C160.58 22.9166 160.38 22.6723 160.14 22.4735C159.899 22.2747 159.621 22.1253 159.323 22.0337C159.024 21.9422 158.711 21.9104 158.4 21.9401C158.089 21.9697 157.787 22.0603 157.511 22.2067L146.397 28.1055L143.45 24.6843C143.094 24.2712 142.607 23.9928 142.071 23.8959C141.534 23.799 140.98 23.8895 140.502 24.1522L130.354 29.7319C130.075 29.8791 129.828 30.0805 129.627 30.3242C129.427 30.5679 129.277 30.849 129.186 31.1512C129.096 31.4534 129.066 31.7706 129.1 32.0843C129.133 32.3979 129.229 32.7018 129.381 32.9782C129.533 33.2546 129.739 33.4979 129.986 33.694C130.233 33.8901 130.517 34.035 130.821 34.1203C131.125 34.2055 131.443 34.2295 131.756 34.1907C132.07 34.1519 132.372 34.0511 132.646 33.8943L141.105 29.2445L144.032 32.6385C144.384 33.0462 144.864 33.322 145.394 33.4207C145.924 33.5194 146.472 33.4351 146.947 33.1815L159.746 26.3936C160.299 26.0971 160.713 25.5943 160.896 24.9946C161.08 24.3949 161.018 23.7471 160.726 23.1923ZM131.603 17.5217L135.361 15.025L138.562 18.1679C138.947 18.5455 139.449 18.7811 139.986 18.8359C140.523 18.8906 141.062 18.7614 141.515 18.4693L148.852 13.7489C149.383 13.4068 149.755 12.8683 149.888 12.2518C150.021 11.6353 149.903 10.9913 149.561 10.4615C149.219 9.93164 148.68 9.5594 148.063 9.42662C147.446 9.29385 146.801 9.41142 146.271 9.75348L140.53 13.4475L137.308 10.2829C136.918 9.89933 136.408 9.66175 135.863 9.61031C135.319 9.55887 134.773 9.6967 134.319 10.0006L128.955 13.5656C128.43 13.9147 128.065 14.4579 127.941 15.0756C127.816 15.6934 127.943 16.3352 128.292 16.8598C128.642 17.3844 129.185 17.7489 129.803 17.873C130.422 17.9971 131.064 17.8707 131.589 17.5217H131.603ZM29.5091 34.1889C30.0367 34.1892 30.5495 34.0141 30.9666 33.6912C31.3837 33.3682 31.6815 32.9159 31.813 32.4053C31.9445 31.8947 31.9023 31.3549 31.6931 30.8709C31.4838 30.3869 31.1194 29.9862 30.6571 29.7319L20.5078 24.1522C20.0299 23.8883 19.4756 23.7972 18.9383 23.8942C18.401 23.9911 17.9136 24.2702 17.5582 24.6843L14.6126 28.1055L3.4918 22.2067C2.93471 21.9115 2.28306 21.8494 1.6802 22.0343C1.07734 22.2191 0.572661 22.6357 0.277179 23.1923C-0.0183018 23.749 -0.0803776 24.4001 0.104608 25.0025C0.289593 25.6049 0.706487 26.1092 1.26358 26.4044L14.0623 33.1924C14.5382 33.4455 15.086 33.5296 15.6159 33.431C16.1459 33.3323 16.6266 33.0567 16.9794 32.6494L19.9046 29.2554L28.3637 33.8902C28.7142 34.0847 29.1082 34.1874 29.5091 34.1889ZM12.1493 13.7489L19.4861 18.4693C19.9394 18.7612 20.4787 18.8905 21.0152 18.8357C21.5517 18.7809 22.0537 18.5454 22.4385 18.1679L25.6436 15.0196L29.4017 17.5162C29.6616 17.6946 29.9543 17.8195 30.2629 17.8838C30.5716 17.948 30.8899 17.9503 31.1994 17.8905C31.5089 17.8307 31.8034 17.71 32.0658 17.5355C32.3282 17.3609 32.5532 17.1359 32.7278 16.8736C32.9024 16.6113 33.023 16.317 33.0827 16.0077C33.1424 15.6984 33.1399 15.3803 33.0754 15.072C33.0109 14.7636 32.8857 14.4712 32.7071 14.2117C32.5284 13.9521 32.2999 13.7307 32.0348 13.5602L26.6694 9.99649C26.2147 9.69288 25.6691 9.55519 25.1246 9.60663C24.5802 9.65806 24.0701 9.89548 23.6804 10.2789L20.4576 13.4434L14.7172 9.7494C14.4546 9.58048 14.1613 9.46489 13.8541 9.40922C13.5468 9.35355 13.2316 9.35889 12.9264 9.42495C12.6212 9.49101 12.332 9.61648 12.0754 9.79421C11.8187 9.97194 11.5996 10.1984 11.4305 10.4608C11.2615 10.7231 11.1458 11.0162 11.0901 11.3232C11.0344 11.6302 11.0397 11.9452 11.1058 12.2501C11.1719 12.5551 11.2975 12.844 11.4754 13.1005C11.6533 13.357 11.8799 13.5759 12.1425 13.7448L12.1493 13.7489Z" fill="#C6C6C6" />
                                </svg>
                            </button>
                        </Grid>

                        {/* Arrow */}
                        <Grid xs={12} xl={1} md={0.8}>
                            <div className={classes.arrow}>
                                <svg width="29" height="69" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M47.5735 20.8703L30.4499 2.2426C28.9428 0.603424 26.6286 0.0666554 24.5538 0.875316C22.4791 1.68398 21.1385 3.64535 21.1385 5.87222V9.75015H6.30625C2.82899 9.75015 0 12.5791 0 16.0564V32.9436C0 36.4209 2.82899 39.2499 6.30625 39.2499H21.1385V43.1278C21.1385 45.3546 22.4791 47.316 24.5539 48.1247C25.1954 48.3748 25.8596 48.4962 26.516 48.4962C27.9824 48.4961 29.409 47.8898 30.4501 46.7574L47.5737 28.1296C49.4755 26.0604 49.4755 22.9397 47.5735 20.8703ZM45.179 25.9283L28.0554 44.5561C27.444 45.221 26.5765 45.4222 25.7349 45.0942C24.8933 44.7661 24.3909 44.031 24.3909 43.1277V37.6235C24.3909 36.7254 23.6628 35.9973 22.7647 35.9973H6.30625C4.62246 35.9973 3.25253 34.6273 3.25253 32.9435V16.0563C3.25253 14.3725 4.62246 13.0026 6.30625 13.0026H22.7648C23.6629 13.0026 24.391 12.2744 24.391 11.3763V5.87212C24.391 4.96883 24.8934 4.23366 25.735 3.90566C26.5766 3.57756 27.4441 3.77871 28.0555 4.44375L45.1791 23.0715C45.9275 23.8859 45.9276 25.114 45.179 25.9283Z" fill="#C6C6C6" />
                                </svg>
                            </div>
                        </Grid>

                        {/* Face-to-face session button */}
                        <Grid xs={12} xl={3} md={3.5} >
                            <div onClick={coachBtn} className={classes.bookbtn}>
                                <h3>Face-to-face session</h3>
                                <button className={classes.bookbtncontent}>
                                    <img src={offline} alt="lol" style={{ overflow: "hidden", position: "relative", height: "200px", backgroundSize: "cover" }}>

                                    </img>
                                    {/* <div className={classes.facetofacephoto}></div> */}
                                    <p>
                                        Make full luscher color test in a face to face sessions,

                                        currently available in UAE and Egypt.

                                        <Link href="#">more details</Link>
                                    </p>
                                    <p>
                                        {/* Costs : <strong>30$</strong> */}
                                    </p>
                                    <h5>Arrange face-to-face meeting</h5>
                                </button>
                            </div>
                        </Grid>

                        {/* Arrow */}
                        <Grid xs={12} xl={1} md={1}>
                            <div className={classes.arrow}>
                                <svg width="29" height="69" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M47.5735 20.8703L30.4499 2.2426C28.9428 0.603424 26.6286 0.0666554 24.5538 0.875316C22.4791 1.68398 21.1385 3.64535 21.1385 5.87222V9.75015H6.30625C2.82899 9.75015 0 12.5791 0 16.0564V32.9436C0 36.4209 2.82899 39.2499 6.30625 39.2499H21.1385V43.1278C21.1385 45.3546 22.4791 47.316 24.5539 48.1247C25.1954 48.3748 25.8596 48.4962 26.516 48.4962C27.9824 48.4961 29.409 47.8898 30.4501 46.7574L47.5737 28.1296C49.4755 26.0604 49.4755 22.9397 47.5735 20.8703ZM45.179 25.9283L28.0554 44.5561C27.444 45.221 26.5765 45.4222 25.7349 45.0942C24.8933 44.7661 24.3909 44.031 24.3909 43.1277V37.6235C24.3909 36.7254 23.6628 35.9973 22.7647 35.9973H6.30625C4.62246 35.9973 3.25253 34.6273 3.25253 32.9435V16.0563C3.25253 14.3725 4.62246 13.0026 6.30625 13.0026H22.7648C23.6629 13.0026 24.391 12.2744 24.391 11.3763V5.87212C24.391 4.96883 24.8934 4.23366 25.735 3.90566C26.5766 3.57756 27.4441 3.77871 28.0555 4.44375L45.1791 23.0715C45.9275 23.8859 45.9276 25.114 45.179 25.9283Z" fill="#C6C6C6" />
                                </svg>
                            </div>
                        </Grid>

                        {/* Online session button */}
                        <Grid xs={12} xl={3} md={3.5}>
                            <div onClick={coachBtn} className={classes.bookbtn}>
                                <h3>Online session</h3>
                                <button className={classes.bookbtncontent}>
                                    <img 
                                        src={online} 
                                        alt="lol" 
                                        style={{ 
                                            overflow: "hidden", 
                                            position: "relative", 
                                            height: "200px", 
                                            backgroundSize: "cover",
                                            marginTop: '20px',
                                            borderRadius: '15px'
                                        }}>

                                    </img>
                                    <p style={{marginTop: '20px'}}>
                                        Meet the therapist online. In a one to one session. ​ <Link href="#">more details</Link>
                                    </p>
                                    <p>
                                        Costs : <strong>30$</strong>
                                    </p>
                                    <h5 style={{marginBottom: '30px'}}>Arrange online meeting</h5>
                                </button>
                            </div>
                        </Grid>

                        {/* Arrow */}
                        <Grid xs={12} xl={1} md={1}>
                            <div className={classes.arrow}>
                                <svg width="29" height="69" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M47.5735 20.8703L30.4499 2.2426C28.9428 0.603424 26.6286 0.0666554 24.5538 0.875316C22.4791 1.68398 21.1385 3.64535 21.1385 5.87222V9.75015H6.30625C2.82899 9.75015 0 12.5791 0 16.0564V32.9436C0 36.4209 2.82899 39.2499 6.30625 39.2499H21.1385V43.1278C21.1385 45.3546 22.4791 47.316 24.5539 48.1247C25.1954 48.3748 25.8596 48.4962 26.516 48.4962C27.9824 48.4961 29.409 47.8898 30.4501 46.7574L47.5737 28.1296C49.4755 26.0604 49.4755 22.9397 47.5735 20.8703ZM45.179 25.9283L28.0554 44.5561C27.444 45.221 26.5765 45.4222 25.7349 45.0942C24.8933 44.7661 24.3909 44.031 24.3909 43.1277V37.6235C24.3909 36.7254 23.6628 35.9973 22.7647 35.9973H6.30625C4.62246 35.9973 3.25253 34.6273 3.25253 32.9435V16.0563C3.25253 14.3725 4.62246 13.0026 6.30625 13.0026H22.7648C23.6629 13.0026 24.391 12.2744 24.391 11.3763V5.87212C24.391 4.96883 24.8934 4.23366 25.735 3.90566C26.5766 3.57756 27.4441 3.77871 28.0555 4.44375L45.1791 23.0715C45.9275 23.8859 45.9276 25.114 45.179 25.9283Z" fill="#C6C6C6" />
                                </svg>
                            </div>
                        </Grid>

                        {/* Help button */}
                        <Grid xs={12} xl={1} md={0.5}>
                            <div className={classes.help}>
                                <svg width="69" height="77" viewBox="0 0 119 127" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M91.5511 72.8782C89.9939 72.8763 88.4691 73.3229 87.159 74.1646C86.8477 69.9499 83.3188 66.6157 79.0258 66.6157C76.855 66.6157 74.8793 67.4685 73.4168 68.8562C71.974 66.5535 69.413 65.019 66.5008 65.019C64.9527 65.0171 63.4364 65.4585 62.1312 66.2911V51.0006C62.128 46.5072 58.4699 42.8516 53.9762 42.8516C51.7985 42.8516 49.7509 43.6999 48.2101 45.2406C46.6697 46.7812 45.8213 48.829 45.8213 51.0065V75.9563C44.6619 74.5117 43.0887 73.4615 41.2716 72.9415C38.9501 72.2764 36.5077 72.5558 34.3947 73.7281C32.2824 74.9001 30.7526 76.8242 30.0878 79.1462C29.423 81.4682 29.7022 83.9096 30.8737 86.0206C32.1885 88.3923 32.4771 93.9599 32.4771 95.9148C32.4785 96.2212 32.5443 103.504 35.2512 110.902C38.9824 121.1 45.8902 126.49 55.2283 126.49H73.8817C81.6836 126.49 88.6524 122.64 93.5045 115.65C93.7861 115.238 93.8932 114.731 93.8025 114.24C93.7119 113.748 93.4308 113.313 93.0205 113.028C92.6102 112.743 92.104 112.632 91.6121 112.719C91.1203 112.806 90.6827 113.084 90.3947 113.492C87.4772 117.694 82.2444 122.704 73.8817 122.704H55.2283C47.5378 122.704 42.0229 118.323 38.8364 109.683C36.335 102.9 36.2634 95.9645 36.2626 95.9067C36.2631 95.0914 36.209 87.8365 34.1842 84.1841C33.8475 83.5813 33.6338 82.9178 33.5553 82.2318C33.4769 81.5459 33.5353 80.8512 33.7271 80.188C33.9156 79.5234 34.2339 78.9028 34.6638 78.3621C35.0937 77.8214 35.6265 77.3713 36.2315 77.0378C36.8346 76.7011 37.4985 76.4873 38.1847 76.4087C38.871 76.3302 39.566 76.3885 40.2295 76.5803C41.5792 76.9667 42.6971 77.8561 43.3782 79.0849C45.2467 82.4527 45.7314 84.3615 45.8216 84.7733V95.88C45.8216 96.382 46.021 96.8634 46.3759 97.2183C46.7309 97.5733 47.2123 97.7727 47.7142 97.7727C48.2162 97.7727 48.6976 97.5733 49.0525 97.2183C49.4075 96.8634 49.6069 96.382 49.6069 95.88V51.0065C49.6069 49.8402 50.0615 48.743 50.8869 47.9171C51.2916 47.5101 51.773 47.1874 52.3032 46.9676C52.8335 46.7479 53.402 46.6355 53.976 46.6369C56.3835 46.6369 58.3436 48.5955 58.3454 51.0016V83.7208C58.3454 84.2228 58.5448 84.7042 58.8997 85.0592C59.2547 85.4141 59.7361 85.6135 60.238 85.6135C60.74 85.6135 61.2214 85.4141 61.5763 85.0592C61.9313 84.7042 62.1307 84.2228 62.1307 83.7208V73.1737C62.1307 70.7642 64.091 68.8041 66.5005 68.8041C68.91 68.8041 70.8701 70.7642 70.8701 73.1737V81.6817C70.8701 82.1836 71.0696 82.6651 71.4245 83.02C71.7794 83.3749 72.2608 83.5743 72.7628 83.5743C73.2648 83.5743 73.7462 83.3749 74.1011 83.02C74.4561 82.6651 74.6555 82.1836 74.6555 81.6817V74.7707C74.6555 72.3612 76.6158 70.4008 79.0253 70.4008C81.4348 70.4008 83.3952 72.3612 83.3952 74.7707V84.3031C83.3952 84.8051 83.5946 85.2865 83.9495 85.6415C84.3045 85.9964 84.7859 86.1958 85.2878 86.1958C85.7898 86.1958 86.2712 85.9964 86.6262 85.6415C86.9811 85.2865 87.1805 84.8051 87.1805 84.3031V81.0329C87.1805 78.6234 89.1409 76.6633 91.5504 76.6633C93.9599 76.6633 95.92 78.6234 95.92 81.0329V95.4768C95.92 99.8644 94.9728 104.356 93.1809 108.465C93.0815 108.693 93.028 108.938 93.0234 109.187C93.0189 109.435 93.0633 109.682 93.1541 109.914C93.245 110.145 93.3805 110.356 93.553 110.535C93.7255 110.714 93.9316 110.858 94.1595 110.957C94.3873 111.056 94.6325 111.11 94.8811 111.115C95.1296 111.119 95.3766 111.075 95.608 110.984C95.8394 110.893 96.0506 110.757 96.2296 110.585C96.4086 110.412 96.5519 110.206 96.6512 109.978C98.6494 105.395 99.7058 100.381 99.7058 95.4771V81.0332C99.706 76.5366 96.0477 72.8782 91.5511 72.8782Z" fill="#C6C6C6" />
                                    <path d="M41.4205 50.7274H14.7475C8.70314 50.7274 3.78582 45.8101 3.78582 39.7657V14.7473C3.78557 8.7029 8.70289 3.78557 14.7475 3.78557H24.8902C25.3885 3.77988 25.8644 3.57796 26.2147 3.22361C26.565 2.86926 26.7615 2.39107 26.7615 1.89279C26.7615 1.3945 26.565 0.916313 26.2147 0.561965C25.8644 0.207617 25.3885 0.00569246 24.8902 0L14.7475 0C6.61555 0 0 6.61555 0 14.7473V39.7657C0 47.8974 6.61555 54.513 14.7473 54.513H41.4202C41.9222 54.513 42.4037 54.3136 42.7587 53.9587C43.1136 53.6037 43.3131 53.1223 43.3131 52.6203C43.3132 52.1183 43.1138 51.6369 42.7588 51.2819C42.4039 50.9269 41.9225 50.7274 41.4205 50.7274ZM103.814 0H31.1997C30.6977 0 30.2163 0.199405 29.8614 0.554348C29.5064 0.909292 29.307 1.3907 29.307 1.89266C29.307 2.39463 29.5064 2.87604 29.8614 3.23098C30.2163 3.58592 30.6977 3.78533 31.1997 3.78533H103.814C109.858 3.78533 114.776 8.70265 114.776 14.747V39.7655C114.776 45.8098 109.858 50.7271 103.814 50.7271H67.5393C67.0373 50.7271 66.5559 50.9266 66.201 51.2815C65.846 51.6364 65.6466 52.1178 65.6466 52.6198C65.6466 53.1218 65.846 53.6032 66.201 53.9581C66.5559 54.3131 67.0373 54.5125 67.5393 54.5125H103.814C111.946 54.5125 118.561 47.8969 118.561 39.7652V14.7473C118.561 6.61555 111.945 0 103.814 0Z" fill="#C6C6C6" />
                                    <path d="M36.0658 13.7461C34.8458 13.7461 33.6629 14.1898 33.6629 15.2247V24.8733H25.3447V15.2247C25.3447 14.1896 24.1248 13.7461 22.9419 13.7461C21.7219 13.7461 20.5391 14.1898 20.5391 15.2247V39.2542C20.5391 40.2523 21.7222 40.7699 22.9419 40.7699C24.125 40.7699 25.3447 40.2523 25.3447 39.2542V28.6443H33.6627V39.2542C33.6627 40.2523 34.8458 40.7699 36.0658 40.7699C37.2489 40.7699 38.4686 40.2523 38.4686 39.2542V15.2247C38.4686 14.1896 37.2487 13.7461 36.0658 13.7461ZM58.173 36.5556H47.7111V29.1251H53.3302C54.3654 29.1251 54.8459 28.127 54.8459 27.2766C54.8459 26.2785 54.2915 25.3543 53.3302 25.3543H47.7111V17.9606H58.173C59.1342 17.9606 59.6886 16.9625 59.6886 15.8164C59.6886 14.8183 59.2081 13.7461 58.173 13.7461H45.0125C43.9405 13.7461 42.9052 14.2637 42.9052 15.2618V39.2539C42.9052 40.252 43.9403 40.7696 45.0125 40.7696H58.1732C59.2084 40.7696 59.6889 39.6977 59.6889 38.6993C59.6889 37.5537 59.1342 36.5556 58.173 36.5556ZM76.3256 36.5554H67.3055V15.2249C67.305 14.19 66.085 13.7463 64.9021 13.7463C63.6822 13.7463 62.4993 14.19 62.4993 15.2249V39.2544C62.4993 40.2525 63.5345 40.7701 64.6067 40.7701H76.3258C77.2871 40.7701 77.7676 39.6981 77.7676 38.6628C77.7674 37.5905 77.2869 36.5554 76.3256 36.5554ZM89.634 13.7461H82.2034C81.0942 13.7461 80.3918 14.4485 80.3918 15.2247V39.2542C80.3918 40.2523 81.5749 40.7699 82.7946 40.7699C83.9778 40.7699 85.1977 40.2523 85.1977 39.2542V30.6775H89.338C94.2178 30.6775 98.0256 28.3483 98.0256 22.2857V22.0638C98.0259 16.0014 94.329 13.7461 89.634 13.7461ZM93.22 22.6555C93.22 25.5391 91.7414 26.907 89.3383 26.907H85.1979V17.9606H89.3383C91.7411 17.9606 93.22 19.3285 93.22 22.2121V22.6555Z" fill="#C6C6C6" />
                                </svg>
                            </div>

                        </Grid>
                    </Grid>
                </div>
                <hr />
            </div>
        </div>
    );
}

export default BookMeeting;