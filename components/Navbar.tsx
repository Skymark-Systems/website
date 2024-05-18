'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Navlinks } from '@/constants/Navlinks'

export const Navbar = () => {
	return (
		<nav
			className="fixed left-[50%] top-8 flex -translate-x-[50%] items-center gap-6 rounded-lg border-[1px] border-neutral-700 bg-neutral-900 p-2 text-sm text-neutral-200 z-50 backdrop-blurborder-[1px] border-white/10 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur "
		>
			<Link href="/" className=''>
				<SkymarkLogo size={1}/>
			</Link>
			{Navlinks.map((link, id) => (
				<NavLink key={id} href={link.href} title={link.title} />
			))}
			<JoinButton title="Contact" link="/contact" />
		</nav>
	)
}

const NavLink = ({ href, title }: { href: string; title: string }) => {
	return (
		<Link href={href} rel="nofollow" className="block overflow-hidden">
			<motion.div
				whileHover={{ y: -20 }}
				transition={{ ease: 'backInOut', duration: 0.5 }}
				className="h-[20px]"
			>
				<span className="flex h-[20px] items-center">{title}</span>
				<span className="flex h-[20px] items-center text-neutral-50">
					{title}
				</span>
			</motion.div>
		</Link>
	)
}

export const SkymarkLogo = ({size} : {size : number}) => {
	// Temp logo from https://logoipsum.com/
	return (
<svg xmlns="http://www.w3.org/2000/svg" width={90 * size} height={40 * size} viewBox="0 0 1115 249" version="1.1"><path d="M 22 26.647 C 16.393 28.580, 13.265 31.354, 10.890 36.500 C 9.206 40.149, 9.042 43.628, 9.022 76.101 C 9 111.837, 9.389 116.509, 12.675 120 C 13.562 120.943, 13.420 120.199, 12.293 118 C 10.686 114.863, 10.468 110.771, 10.191 78.500 C 9.869 41.050, 10.162 37.606, 14.092 32.610 C 18.959 26.423, 17.607 26.550, 84.500 25.978 L 145.500 25.455 86 25.275 C 34.513 25.120, 25.894 25.304, 22 26.647 M 190.250 25.747 L 202 26.063 202 71.532 L 202 117 211.441 117 C 217.793 117, 221.147 116.599, 221.691 115.773 C 222.136 115.098, 225.687 105.086, 229.583 93.523 L 236.665 72.500 253.265 72.226 L 269.866 71.952 262.461 94.117 C 258.388 106.308, 255.295 116.668, 255.587 117.141 C 255.879 117.613, 257.104 118.004, 258.309 118.010 C 264.915 118.039, 274.694 125.560, 278.935 133.872 C 280.408 136.759, 293.476 168.859, 303.729 194.775 C 304.128 195.783, 300.735 195.992, 287.470 195.775 L 270.706 195.500 261.103 173 L 251.500 150.500 227 150.500 L 202.500 150.500 202.231 173.250 L 201.962 196 185.481 196 L 169 196 169 112.559 C 169 66.666, 168.662 28.909, 168.250 28.654 C 167.838 28.399, 167.618 66.173, 167.761 112.595 L 168.022 197 185.511 197 L 203 197 203 174 L 203 151 226.911 151 L 250.822 151 260.565 174 L 270.308 197 287.770 197 C 303.921 197, 305.197 196.868, 304.746 195.250 C 303.832 191.968, 281.888 137.702, 279.897 133.799 C 275.526 125.231, 264.964 117.039, 258.250 117.010 C 257.012 117.004, 256 116.876, 256 116.725 C 256 116.574, 259.375 106.348, 263.500 94 C 267.625 81.652, 271 71.426, 271 71.275 C 271 71.124, 263.163 71, 253.583 71 L 236.167 71 228.752 93.250 L 221.338 115.500 212.169 115.788 L 203 116.075 203 70.538 L 203 25 190.750 25.215 L 178.500 25.430 190.250 25.747 M 953 111 L 953 197 970.500 197 L 988 197 988 174 L 988 151 1011.950 151 C 1033.705 151, 1035.994 151.160, 1036.920 152.750 C 1037.481 153.713, 1037.953 153.993, 1037.970 153.372 C 1038.052 150.312, 1035.112 149.965, 1011.375 150.232 L 987.500 150.500 987.231 173.250 L 986.962 196 970.481 196 L 954 196 954 111 L 954 26 970.490 26 L 986.980 26 987.240 71.250 L 987.500 116.500 997.409 116.500 L 1007.318 116.500 1010.167 108.023 C 1011.733 103.360, 1012.885 99.155, 1012.726 98.678 C 1012.567 98.201, 1011.129 101.903, 1009.530 106.905 L 1006.624 116 997.312 116 L 988 116 988 70.500 L 988 25 970.500 25 L 953 25 953 111 M 138.541 44.876 L 133.841 58.980 88.670 59.240 L 43.500 59.500 43.500 77 L 43.500 94.500 88 95 C 134.995 95.528, 134.451 95.472, 139.768 100.316 C 144.382 104.520, 145 109.796, 145 145 C 145 171.203, 144.702 178.640, 143.489 182.724 C 141.548 189.260, 136.956 193.415, 130.030 194.900 C 126.638 195.628, 105.451 196, 67.451 196 L 10 196 10 179.509 L 10 163.018 60.750 162.759 L 111.500 162.500 111.500 145 L 111.500 127.500 67 127 C 23.026 126.506, 18.446 126.148, 16.538 123.062 C 16.177 122.478, 15.398 122, 14.806 122 C 12.999 122, 18.284 125.606, 21.899 126.840 C 24.270 127.649, 38.261 128, 68.149 128 L 111 128 111 145 L 111 162 60 162 L 9 162 9 179.537 L 9 197.073 69.750 196.787 C 136.450 196.472, 134.517 196.648, 140.383 190.361 C 145.476 184.902, 146 180.670, 146 145 C 146 109.115, 145.443 104.714, 140.274 99.763 C 134.304 94.045, 133.886 94, 87.032 94 L 44 94 44 77 L 44 60 89.291 60 L 134.583 60 138.994 46.519 C 141.665 38.355, 143.713 33.523, 144.187 34.269 C 144.617 34.946, 144.969 35.050, 144.969 34.500 C 144.969 33.950, 144.581 32.886, 144.105 32.136 C 143.521 31.213, 141.724 35.328, 138.541 44.876 M 729.408 70.225 C 729.610 71.225, 738.824 71.608, 772.083 72 C 810.242 72.450, 814.826 72.678, 817.750 74.276 C 819.538 75.252, 821 75.793, 821 75.477 C 821 75.161, 819.087 74.034, 816.750 72.973 C 812.775 71.169, 809.834 71.043, 771.333 71.022 C 744.238 71.008, 729.993 70.650, 729.658 69.975 C 729.379 69.411, 729.266 69.524, 729.408 70.225 M 713.500 71 L 707.500 71.664 713.191 71.832 C 716.321 71.924, 719.160 71.550, 719.500 71 C 719.840 70.450, 719.979 70.076, 719.809 70.168 C 719.639 70.261, 716.800 70.635, 713.500 71 M 316.044 125.750 C 316.090 183.391, 316.225 185.274, 320.655 190.173 C 321.670 191.295, 324.300 193.177, 326.500 194.356 C 330.389 196.440, 331.719 196.508, 374.250 196.790 L 418 197.079 418 202.021 L 418 206.962 395.336 207.231 L 372.673 207.500 366.913 224.750 L 361.152 242 398.710 242 C 424.481 242, 437.493 241.633, 440.171 240.831 C 444.955 239.397, 450.486 233.512, 451.928 228.321 C 452.633 225.781, 452.991 198.773, 452.994 147.750 L 453 71 435.500 71 L 418 71 418 116.500 L 418 162 384.500 162 L 351 162 351 116.500 L 351 71 333.500 71 L 316 71 316.044 125.750 M 485.929 73.750 C 481.820 75.832, 479.892 77.594, 478 81 L 475.500 85.500 475.218 141.250 L 474.936 197 492.468 197 L 510 197 510 151.500 L 510 106 532.500 106 L 555 106 555 151.500 L 555 197 572.500 197 L 590 197 590.056 164.750 C 590.142 115.474, 590.052 105.718, 589.504 105.171 C 589.227 104.894, 589 125.217, 589 150.333 L 589 196 572.510 196 L 556.020 196 555.760 150.750 L 555.500 105.500 532.500 105.500 L 509.500 105.500 509.240 150.750 L 508.980 196 492.457 196 L 475.935 196 476.218 140.750 C 476.500 85.530, 476.501 85.498, 478.763 81.263 C 480.252 78.478, 482.478 76.252, 485.263 74.763 L 489.500 72.500 569.500 71.985 L 649.500 71.471 570.429 71.235 L 491.359 71 485.929 73.750 M 863.655 72.459 C 858.704 74.224, 855.202 77.490, 852.890 82.500 C 851.167 86.234, 851.042 90.173, 851.022 141.750 L 851 197 868.500 197 L 886 197 886 151.500 L 886 106 908.417 106 L 930.834 106 936.417 89.249 C 939.488 80.036, 942 72.161, 942 71.749 C 942 71.337, 925.237 71.020, 904.750 71.044 C 875.825 71.078, 866.641 71.394, 863.655 72.459 M 1017.607 82.216 C 1015.678 88.385, 1014.273 93.606, 1014.486 93.819 C 1014.698 94.032, 1016.393 89.322, 1018.251 83.353 L 1021.629 72.500 1038.257 72.226 L 1054.884 71.952 1051.442 82.173 C 1049.549 87.794, 1048.034 92.867, 1048.076 93.446 C 1048.137 94.294, 1052.982 80.933, 1055.564 72.799 C 1056.099 71.114, 1055.029 71, 1038.625 71 L 1021.116 71 1017.607 82.216 M 317.218 127.750 C 317.492 181.893, 317.559 183.601, 319.551 187 C 320.679 188.925, 323.604 191.625, 326.051 193 L 330.500 195.500 374.500 196 L 418.500 196.500 418.800 202.250 L 419.100 208 396.277 208 L 373.453 208 368.227 223.783 C 365.352 232.464, 363 239.889, 363 240.283 C 363 241.556, 435.847 241.126, 440.182 239.827 C 444.878 238.420, 449.502 233.456, 450.940 228.277 C 451.629 225.794, 451.991 198.372, 451.994 148.250 L 452 72 435.510 72 L 419.020 72 418.760 117.250 L 418.500 162.500 384.500 162.500 L 350.500 162.500 350.240 117.250 L 349.980 72 333.458 72 L 316.936 72 317.218 127.750 M 700.500 74.426 C 698.300 75.750, 695.682 78.228, 694.683 79.934 C 693.667 81.669, 692.387 82.739, 691.779 82.363 C 691.129 81.961, 690.978 82.156, 691.405 82.845 C 692.560 84.715, 693.433 84.209, 695.422 80.515 C 696.668 78.202, 698.996 76.184, 702.346 74.515 C 705.122 73.132, 706.742 72.004, 705.946 72.009 C 705.151 72.015, 702.700 73.102, 700.500 74.426 M 863.684 73.449 C 858.701 75.226, 856.132 77.598, 853.881 82.500 C 852.170 86.225, 852.042 90.267, 852.022 141.250 L 852 196 868.500 196 L 885 196 885 150.519 L 885 105.038 907.663 104.769 L 930.326 104.500 935.173 90 C 937.839 82.025, 940.271 74.713, 940.578 73.750 C 941.102 72.104, 938.938 72.003, 904.317 72.044 C 875.888 72.078, 866.631 72.398, 863.684 73.449 M 824.730 80.957 L 827.500 86.413 827.783 141.207 L 828.065 196 811.543 196 L 795.020 196 794.760 150.750 L 794.500 105.500 760 105.500 L 725.500 105.500 725.500 134 L 725.500 162.500 753.812 162.766 C 780.157 163.013, 782.086 163.152, 781.573 164.766 C 781.269 165.720, 778.839 173.025, 776.173 181 L 771.326 195.500 739.913 196.021 L 708.500 196.543 740.167 196.771 L 771.834 197 777.417 180.249 C 780.488 171.036, 783 163.161, 783 162.749 C 783 162.337, 770.175 162, 754.500 162 L 726 162 726 134 L 726 106 760 106 L 794 106 794 151.500 L 794 197 811.500 197 L 829 197 829 143.682 C 829 86.755, 828.786 83.959, 823.978 78 C 822.510 76.181, 822.715 76.986, 824.730 80.957 M 691.447 137 C 691.535 184.790, 691.528 184.720, 696.814 190.373 C 699.491 193.237, 704.783 196.063, 707.218 195.930 C 707.923 195.891, 706.720 195.207, 704.544 194.411 C 699.623 192.609, 696.224 189.540, 694.121 185 C 692.733 182.003, 692.419 175.110, 691.933 137 L 691.365 92.500 691.447 137 M 1043.134 107.078 C 1041.438 112.135, 1040.291 116.661, 1040.584 117.136 C 1040.878 117.611, 1042.104 118.010, 1043.309 118.022 C 1049.137 118.080, 1058.092 124.166, 1062.514 131.072 C 1064.416 134.044, 1089 193.816, 1089 195.470 C 1089 195.762, 1081.624 196, 1072.609 196 L 1056.217 196 1047.440 175.502 C 1042.613 164.228, 1038.505 155.161, 1038.313 155.354 C 1038.120 155.547, 1041.908 164.988, 1046.731 176.335 L 1055.500 196.964 1072.750 196.982 C 1083.925 196.994, 1090 196.637, 1090 195.970 C 1090 193.962, 1065.764 134.587, 1063.509 131.072 C 1058.783 123.703, 1049.233 117.080, 1043.250 117.022 C 1042.013 117.010, 1041 116.859, 1041 116.688 C 1041 116.516, 1042.348 112.388, 1043.995 107.516 C 1045.642 102.643, 1046.816 98.482, 1046.603 98.270 C 1046.391 98.058, 1044.830 102.022, 1043.134 107.078 M 668.667 120.667 C 668.300 121.033, 668 138.133, 668 158.667 L 668 196 651.500 196 L 635 196 635 170.559 C 635 156.566, 634.663 144.909, 634.250 144.654 C 633.837 144.398, 633.627 156.072, 633.782 170.595 L 634.064 197 651.509 197 L 668.954 197 669.227 158.500 C 669.377 137.324, 669.462 119.999, 669.417 120 C 669.371 120, 669.033 120.300, 668.667 120.667" stroke="none" fill="#9a8d84" fill-rule="evenodd"/><path d="M 22 27.651 C 16.320 29.613, 14.186 31.480, 11.881 36.500 C 10.210 40.139, 10.042 43.695, 10.022 75.884 C 10.007 100.029, 10.371 112.506, 11.168 115.165 C 12.437 119.403, 16.054 123.580, 20 125.368 C 21.684 126.130, 37.025 126.663, 67 127 L 111.500 127.500 111.500 145 L 111.500 162.500 60.750 162.759 L 10 163.018 10 179.509 L 10 196 67.451 196 C 105.451 196, 126.638 195.628, 130.030 194.900 C 136.956 193.415, 141.548 189.260, 143.489 182.724 C 144.702 178.640, 145 171.203, 145 145 C 145 109.796, 144.382 104.520, 139.768 100.316 C 134.451 95.472, 134.995 95.528, 88 95 L 43.500 94.500 43.500 77 L 43.500 59.500 88.640 59.240 L 133.781 58.980 138.807 44.240 C 141.571 36.133, 144.143 28.712, 144.523 27.750 C 145.177 26.095, 141.995 26.003, 85.857 26.048 C 34.843 26.089, 25.867 26.314, 22 27.651 M 168.370 28.250 C 168.701 29.488, 168.979 67.737, 168.986 113.250 L 169 196 185.481 196 L 201.962 196 202.231 173.250 L 202.500 150.500 227 150.500 L 251.500 150.500 261.103 173 L 270.706 195.500 287.470 195.775 C 300.735 195.992, 304.128 195.783, 303.729 194.775 C 293.476 168.859, 280.408 136.759, 278.935 133.872 C 274.694 125.560, 264.915 118.039, 258.309 118.010 C 257.104 118.004, 255.879 117.613, 255.587 117.141 C 255.295 116.668, 258.388 106.308, 262.461 94.117 L 269.866 71.952 253.265 72.226 L 236.665 72.500 229.583 93.523 C 225.687 105.086, 222.136 115.098, 221.691 115.773 C 221.147 116.599, 217.793 117, 211.441 117 L 202 117 202 71.500 L 202 26 184.883 26 L 167.767 26 168.370 28.250 M 954 111 L 954 196 970.481 196 L 986.962 196 987.231 173.250 L 987.500 150.500 1011.613 150.233 C 1030.160 150.027, 1035.950 150.258, 1036.695 151.233 C 1037.229 151.930, 1041.843 162.287, 1046.951 174.250 L 1056.236 196 1072.618 196 C 1081.628 196, 1089 195.762, 1089 195.470 C 1089 193.816, 1064.416 134.044, 1062.514 131.072 C 1058.092 124.166, 1049.137 118.080, 1043.309 118.022 C 1042.104 118.010, 1040.867 117.593, 1040.559 117.096 C 1040.252 116.599, 1041.537 111.761, 1043.415 106.346 C 1045.292 100.931, 1048.624 90.977, 1050.819 84.226 L 1054.809 71.953 1038.274 72.226 L 1021.740 72.500 1014.555 94.500 L 1007.370 116.500 997.435 116.500 L 987.500 116.500 987.240 71.250 L 986.980 26 970.490 26 L 954 26 954 111 M 569.500 72 L 489.500 72.500 485.263 74.763 C 482.478 76.252, 480.252 78.478, 478.763 81.263 C 476.501 85.498, 476.500 85.530, 476.218 140.750 L 475.935 196 492.457 196 L 508.980 196 509.240 150.750 L 509.500 105.500 532.500 105.500 L 555.500 105.500 555.760 150.750 L 556.020 196 572.510 196 L 589 196 589 150.500 L 589 105 612 105 L 635 105 635 150.500 L 635 196 651.500 196 L 668 196 668.250 158.250 C 668.739 84.370, 668.782 86.027, 666.281 81.351 C 663.766 76.647, 659.285 73.483, 653.470 72.305 C 651.287 71.862, 613.500 71.725, 569.500 72 M 712.499 72.046 C 702.835 72.800, 697.755 75.757, 694.422 82.569 L 691.890 87.745 692.207 134.622 C 692.545 184.768, 692.548 184.796, 697.725 190.223 C 702.831 195.575, 706.536 196.056, 740.465 195.765 L 771.325 195.500 776.173 181 C 778.839 173.025, 781.269 165.720, 781.573 164.766 C 782.086 163.152, 780.157 163.013, 753.812 162.766 L 725.500 162.500 725.500 134 L 725.500 105.500 760 105.500 L 794.500 105.500 794.760 150.750 L 795.020 196 811.543 196 L 828.065 196 827.783 141.250 L 827.500 86.500 825.101 81.626 C 823.116 77.594, 821.821 76.355, 817.601 74.450 C 812.549 72.170, 812.054 72.144, 766 71.824 C 740.425 71.646, 716.349 71.746, 712.499 72.046 M 317.218 127.750 C 317.492 181.893, 317.559 183.601, 319.551 187 C 320.679 188.925, 323.604 191.625, 326.051 193 L 330.500 195.500 374.500 196 L 418.500 196.500 418.800 202.250 L 419.100 208 396.277 208 L 373.453 208 368.227 223.783 C 365.352 232.464, 363 239.889, 363 240.283 C 363 241.556, 435.847 241.126, 440.182 239.827 C 444.878 238.420, 449.502 233.456, 450.940 228.277 C 451.629 225.794, 451.991 198.372, 451.994 148.250 L 452 72 435.510 72 L 419.020 72 418.760 117.250 L 418.500 162.500 384.500 162.500 L 350.500 162.500 350.240 117.250 L 349.980 72 333.458 72 L 316.936 72 317.218 127.750 M 863.684 73.449 C 858.701 75.226, 856.132 77.598, 853.881 82.500 C 852.170 86.225, 852.042 90.267, 852.022 141.250 L 852 196 868.500 196 L 885 196 885 150.519 L 885 105.038 907.663 104.769 L 930.326 104.500 935.173 90 C 937.839 82.025, 940.271 74.713, 940.578 73.750 C 941.102 72.104, 938.938 72.003, 904.317 72.044 C 875.888 72.078, 866.631 72.398, 863.684 73.449" stroke="none" fill="#fbfbfb" fill-rule="evenodd"/></svg>
	);
  };

const JoinButton = ({ title, link }: { title: string; link: string }) => {
	return (
		<Link href={link}>
			<button
				className={`
          relative z-50 flex items-center gap-2 overflow-hidden whitespace-nowrap rounded-lg border-[1px] 
          border-neutral-700 px-4 py-1.5 font-medium
         text-neutral-300 transition-all duration-300
          
          before:absolute before:inset-0
          before:-z-50 before:translate-y-[200%]
          before:scale-[2.5]
          before:rounded-[100%] before:bg-neutral-50
          before:transition-transform before:duration-1000
          before:content-[""]
  
          hover:scale-105 hover:border-neutral-50 hover:text-neutral-900
          hover:before:translate-y-[0%]
          active:scale-100`}
			>
				{title}
			</button>
		</Link>
	)
}
