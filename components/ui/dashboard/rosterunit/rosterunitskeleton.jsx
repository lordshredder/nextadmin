"use client";
import Image from "next/image";
import styles from "./rosterunit.module.css";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { updateMemberRoster } from "@/lib/actions";
import Search from "@/components/ui/dashboard/search/search";
import { useFormState } from "react-dom";
import { toast } from 'sonner';
import { useEffect } from "react";


const data = [{"name":"Rima","imagelink":"https://redive.estertion.win/icon/unit/105261.webp","id":105261,"range":105,"stars":6,"element":"Wind"},
{"name":"Kuuka (Ooedo)","imagelink":"https://redive.estertion.win/icon/unit/109531.webp","id":109531,"range":140,"stars":5,"element":"Fire"},
{"name":"Shizuru (Summer)","imagelink":"https://redive.estertion.win/icon/unit/117131.webp","id":117131,"range":998,"stars":5,"element":"Fire"},
{"name":"Muimi","imagelink":"https://redive.estertion.win/icon/unit/106161.webp","id":106161,"range":998,"stars":5,"element":"Fire"},
{"name":"Rin (Idolmaster)","imagelink":"https://redive.estertion.win/icon/unit/112531.webp","id":112531,"range":153,"stars":5,"element":"Water"},
{"name":"Jun","imagelink":"https://redive.estertion.win/icon/unit/104761.webp","id":104761,"range":135,"stars":6,"element":"Fire"},
{"name":"Miyako","imagelink":"https://redive.estertion.win/icon/unit/100761.webp","id":100761,"range":125,"stars":6,"element":"Dark"},
{"name":"Kaya","imagelink":"https://redive.estertion.win/icon/unit/106561.webp","id":106561,"range":168,"stars":6,"element":"Fire"},
{"name":"Rima (Cinderella)","imagelink":"https://redive.estertion.win/icon/unit/115831.webp","id":115831,"range":998,"stars":5,"element":"Fire"},
{"name":"Matsuri (Halloween)","imagelink":"https://redive.estertion.win/icon/unit/114131.webp","id":114131,"range":998,"stars":5,"element":"Fire"},
{"name":"Inori","imagelink":"https://redive.estertion.win/icon/unit/106661.webp","id":106661,"range":998,"stars":5,"element":"Fire"},
{"name":"Misogi","imagelink":"https://redive.estertion.win/icon/unit/100461.webp","id":100461,"range":998,"stars":5,"element":"Fire"},
{"name":"Anna (Pirate)","imagelink":"https://redive.estertion.win/icon/unit/121931.webp","id":121931,"range":293,"stars":5,"element":"Water"},
{"name":"Saren (Sarasaria)","imagelink":"https://redive.estertion.win/icon/unit/127531.webp","id":127531,"range":998,"stars":5,"element":"Fire"},
{"name":"Mimi (Summer)","imagelink":"https://redive.estertion.win/icon/unit/122931.webp","id":122931,"range":998,"stars":5,"element":"Fire"},
{"name":"Ninon","imagelink":"https://redive.estertion.win/icon/unit/103061.webp","id":103061,"range":998,"stars":5,"element":"Fire"},
{"name":"Djeeta (Warlock)","imagelink":"https://redive.estertion.win/icon/unit/125531.webp","id":125531,"range":998,"stars":5,"element":"Fire"},
{"name":"Ayumi (Wonderland)","imagelink":"https://redive.estertion.win/icon/unit/113031.webp","id":113031,"range":998,"stars":5,"element":"Fire"},
{"name":"Monika (Magical)","imagelink":"https://redive.estertion.win/icon/unit/114231.webp","id":114231,"range":998,"stars":5,"element":"Fire"},
{"name":"Mitsuki (Ooedo)","imagelink":"https://redive.estertion.win/icon/unit/117531.webp","id":117531,"range":998,"stars":5,"element":"Fire"},
{"name":"Suzuna (Summer)","imagelink":"https://redive.estertion.win/icon/unit/110031.webp","id":110031,"range":998,"stars":5,"element":"Fire"},
{"name":"Shiori (Magical)","imagelink":"https://redive.estertion.win/icon/unit/112331.webp","id":112331,"range":998,"stars":5,"element":"Fire"},
{"name":"Io (Summer)","imagelink":"https://redive.estertion.win/icon/unit/110131.webp","id":110131,"range":998,"stars":5,"element":"Fire"},
{"name":"Suzume (New Year)","imagelink":"https://redive.estertion.win/icon/unit/112131.webp","id":112131,"range":998,"stars":5,"element":"Fire"},
{"name":"Rei (New Year)","imagelink":"https://redive.estertion.win/icon/unit/108931.webp","id":108931,"range":153,"stars":5,"element":"Water"},
{"name":"Pecorine (Princess)","imagelink":"https://redive.estertion.win/icon/unit/180431.webp","id":180431,"range":155,"stars":5,"element":"Light"},
{"name":"Kurumi","imagelink":"https://redive.estertion.win/icon/unit/102161.webp","id":102161,"range":998,"stars":5,"element":"Fire"},
{"name":"Pecorine (New Year)","imagelink":"https://redive.estertion.win/icon/unit/111831.webp","id":111831,"range":998,"stars":5,"element":"Fire"},
{"name":"Mifuyu (Work Clothes)","imagelink":"https://redive.estertion.win/icon/unit/116931.webp","id":116931,"range":998,"stars":5,"element":"Fire"},
{"name":"Mimi","imagelink":"https://redive.estertion.win/icon/unit/102061.webp","id":102061,"range":998,"stars":5,"element":"Fire"},
{"name":"Rei (Halloween)","imagelink":"https://redive.estertion.win/icon/unit/114031.webp","id":114031,"range":998,"stars":5,"element":"Fire"},
{"name":"Nozomi (Summer)","imagelink":"https://redive.estertion.win/icon/unit/117231.webp","id":117231,"range":998,"stars":5,"element":"Fire"},
{"name":"Akari (Christmas)","imagelink":"https://redive.estertion.win/icon/unit/124031.webp","id":124031,"range":998,"stars":5,"element":"Fire"},
{"name":"Ninon (Halloween)","imagelink":"https://redive.estertion.win/icon/unit/117831.webp","id":117831,"range":998,"stars":5,"element":"Fire"},
{"name":"Neneka (Summer)","imagelink":"https://redive.estertion.win/icon/unit/126631.webp","id":126631,"range":998,"stars":5,"element":"Fire"},
{"name":"Kyaru (New Year)","imagelink":"https://redive.estertion.win/icon/unit/112031.webp","id":112031,"range":998,"stars":5,"element":"Fire"},
{"name":"Nanaka (Halloween)","imagelink":"https://redive.estertion.win/icon/unit/123731.webp","id":123731,"range":998,"stars":5,"element":"Fire"},
{"name":"Rino (Christmas)","imagelink":"https://redive.estertion.win/icon/unit/119331.webp","id":119331,"range":998,"stars":5,"element":"Fire"},
{"name":"Kyaru (Transfer Student)","imagelink":"https://redive.estertion.win/icon/unit/127231.webp","id":127231,"range":998,"stars":5,"element":"Fire"},
{"name":"Tamaki (Cafe)","imagelink":"https://redive.estertion.win/icon/unit/125131.webp","id":125131,"range":998,"stars":5,"element":"Fire"},
{"id":128331,"name":"Inori (New Year)","imagelink":"https://redive.estertion.win/icon/unit/128331.webp","element":"Fire","__v":0,"range":998,"stars":5},
{"name":"Nozomi","imagelink":"https://redive.estertion.win/icon/unit/102961.webp","id":102961,"range":998,"stars":5,"element":"Fire"},
{"name":"Makoto (Summer)","imagelink":"https://redive.estertion.win/icon/unit/110431.webp","id":110431,"range":998,"stars":5,"element":"Fire"},
{"name":"Matsuri","imagelink":"https://redive.estertion.win/icon/unit/100561.webp","id":100561,"range":998,"stars":5,"element":"Fire"},
{"name":"Eriko (Valentine)","imagelink":"https://redive.estertion.win/icon/unit/109031.webp","id":109031,"range":998,"stars":5,"element":"Fire"},
{"name":"Tomo","imagelink":"https://redive.estertion.win/icon/unit/103761.webp","id":103761,"range":998,"stars":5,"element":"Fire"},
{"name":"Djeeta","imagelink":"https://redive.estertion.win/icon/unit/105761.webp","id":105761,"range":998,"stars":5,"element":"Fire"},
{"name":"Christina (Christmas)","imagelink":"https://redive.estertion.win/icon/unit/111531.webp","id":111531,"range":998,"stars":5,"element":"Fire"},
{"name":"Rei (Princess)","imagelink":"https://redive.estertion.win/icon/unit/180331.webp","id":180331,"range":998,"stars":5,"element":"Fire"},
{"name":"Shinobu (Pirate)","imagelink":"https://redive.estertion.win/icon/unit/122031.webp","id":122031,"range":998,"stars":5,"element":"Fire"},
{"name":"Quria (Fallen)","imagelink":"https://redive.estertion.win/icon/unit/126031.webp","id":126031,"range":998,"stars":5,"element":"Fire"},
{"name":"Eriko (Summer)","imagelink":"https://redive.estertion.win/icon/unit/117031.webp","id":117031,"range":998,"stars":5,"element":"Fire"},
{"name":"Kokkoro","imagelink":"https://redive.estertion.win/icon/unit/105961.webp","id":105961,"range":998,"stars":5,"element":"Fire"},
{"name":"Akari (Angel)","imagelink":"https://redive.estertion.win/icon/unit/113731.webp","id":113731,"range":998,"stars":5,"element":"Fire"},
{"name":"Anne & Grea","imagelink":"https://redive.estertion.win/icon/unit/181031.webp","id":181031,"range":998,"stars":5,"element":"Fire"},
{"name":"Emilia","imagelink":"https://redive.estertion.win/icon/unit/109931.webp","id":109931,"range":998,"stars":5,"element":"Fire"},
{"name":"Misaki (Stage)","imagelink":"https://redive.estertion.win/icon/unit/121431.webp","id":121431,"range":998,"stars":5,"element":"Fire"},
{"name":"Suzume (Summer)","imagelink":"https://redive.estertion.win/icon/unit/107731.webp","id":107731,"range":998,"stars":5,"element":"Fire"},
{"name":"Ranpha","imagelink":"https://redive.estertion.win/icon/unit/118131.webp","id":118131,"range":998,"stars":5,"element":"Fire"},
{"name":"Maho (Summer)","imagelink":"https://redive.estertion.win/icon/unit/110631.webp","id":110631,"range":998,"stars":5,"element":"Fire"},
{"name":"Kaya (Liberator)","imagelink":"https://redive.estertion.win/icon/unit/124931.webp","id":124931,"range":998,"stars":5,"element":"Fire"},
{"name":"Ilya (Christmas)","imagelink":"https://redive.estertion.win/icon/unit/111731.webp","id":111731,"range":998,"stars":5,"element":"Fire"},
{"name":"Miyako (Christmas)","imagelink":"https://redive.estertion.win/icon/unit/119931.webp","id":119931,"range":998,"stars":5,"element":"Fire"},
{"name":"Akino & Saren","imagelink":"https://redive.estertion.win/icon/unit/180931.webp","id":180931,"range":998,"stars":5,"element":"Fire"},
{"name":"Rin (Ranger)","imagelink":"https://redive.estertion.win/icon/unit/112731.webp","id":112731,"range":998,"stars":5,"element":"Fire"},
{"name":"Misogi & Mimi & Kyouka","imagelink":"https://redive.estertion.win/icon/unit/180831.webp","id":180831,"range":998,"stars":5,"element":"Fire"},
{"name":"Grea","imagelink":"https://redive.estertion.win/icon/unit/109431.webp","id":109431,"range":998,"stars":5,"element":"Fire"},
{"name":"Mio (Idolmaster)","imagelink":"https://redive.estertion.win/icon/unit/112631.webp","id":112631,"range":998,"stars":5,"element":"Fire"},
{"name":"Io","imagelink":"https://redive.estertion.win/icon/unit/101861.webp","id":101861,"range":998,"stars":5,"element":"Fire"},
{"name":"Hatsune & Shiori","imagelink":"https://redive.estertion.win/icon/unit/180731.webp","id":180731,"range":998,"stars":5,"element":"Fire"},
{"name":"Yuki","imagelink":"https://redive.estertion.win/icon/unit/100861.webp","id":100861,"range":998,"stars":5,"element":"Fire"},
{"name":"Kyouka (Halloween)","imagelink":"https://redive.estertion.win/icon/unit/111131.webp","id":111131,"range":998,"stars":5,"element":"Fire"},
{"name":"Ruka (Summer)","imagelink":"https://redive.estertion.win/icon/unit/113131.webp","id":113131,"range":998,"stars":5,"element":"Fire"},
{"name":"Misogi (Halloween)","imagelink":"https://redive.estertion.win/icon/unit/111231.webp","id":111231,"range":998,"stars":5,"element":"Fire"},
{"name":"Pecorine (Summer)","imagelink":"https://redive.estertion.win/icon/unit/107561.webp","id":107561,"range":998,"stars":5,"element":"Fire"},
{"name":"Inori (Phantom Thief)","imagelink":"https://redive.estertion.win/icon/unit/121631.webp","id":121631,"range":998,"stars":5,"element":"Fire"},
{"name":"Shefi","imagelink":"https://redive.estertion.win/icon/unit/106461.webp","id":106461,"range":998,"stars":5,"element":"Fire"},
{"name":"Yuki (Ritual Garment)","imagelink":"https://redive.estertion.win/icon/unit/126331.webp","id":126331,"range":998,"stars":5,"element":"Fire"},
{"name":"Yui (Summer)","imagelink":"https://redive.estertion.win/icon/unit/122631.webp","id":122631,"range":998,"stars":5,"element":"Fire"},
{"name":"Ruu","imagelink":"https://redive.estertion.win/icon/unit/109331.webp","id":109331,"range":998,"stars":5,"element":"Fire"},
{"name":"Misato (Summer)","imagelink":"https://redive.estertion.win/icon/unit/113531.webp","id":113531,"range":998,"stars":5,"element":"Fire"},
{"name":"Homare","imagelink":"https://redive.estertion.win/icon/unit/106731.webp","id":106731,"range":998,"stars":5,"element":"Fire"},
{"name":"Rino (Wonderland)","imagelink":"https://redive.estertion.win/icon/unit/112931.webp","id":112931,"range":998,"stars":5,"element":"Fire"},
{"name":"Kasumi (Summer)","imagelink":"https://redive.estertion.win/icon/unit/115731.webp","id":115731,"range":998,"stars":5,"element":"Fire"},
{"name":"Nanaka","imagelink":"https://redive.estertion.win/icon/unit/101361.webp","id":101361,"range":998,"stars":5,"element":"Fire"},
{"name":"Kyaru (Princess)","imagelink":"https://redive.estertion.win/icon/unit/180631.webp","id":180631,"range":998,"stars":5,"element":"Fire"},
{"name":"Kokkoro (Ranger)","imagelink":"https://redive.estertion.win/icon/unit/125331.webp","id":125331,"range":998,"stars":5,"element":"Fire"},
{"name":"Luna","imagelink":"https://redive.estertion.win/icon/unit/111431.webp","id":111431,"range":998,"stars":5,"element":"Fire"},
{"name":"Chika (Christmas)","imagelink":"https://redive.estertion.win/icon/unit/108431.webp","id":108431,"range":998,"stars":5,"element":"Fire"},
{"name":"Maho","imagelink":"https://redive.estertion.win/icon/unit/101061.webp","id":101061,"range":998,"stars":5,"element":"Fire"},
{"name":"Yui","imagelink":"https://redive.estertion.win/icon/unit/100261.webp","id":100261,"range":998,"stars":5,"element":"Fire"},
{"name":"Ruka","imagelink":"https://redive.estertion.win/icon/unit/105631.webp","id":105631,"range":998,"stars":5,"element":"Fire"},
{"name":"Kaya (Time Travel)","imagelink":"https://redive.estertion.win/icon/unit/116631.webp","id":116631,"range":998,"stars":5,"element":"Fire"},
{"name":"Ram","imagelink":"https://redive.estertion.win/icon/unit/109831.webp","id":109831,"range":998,"stars":5,"element":"Fire"},
{"name":"Lyrael","imagelink":"https://redive.estertion.win/icon/unit/126531.webp","id":126531,"range":998,"stars":5,"element":"Fire"},
{"name":"Aoi","imagelink":"https://redive.estertion.win/icon/unit/104061.webp","id":104061,"range":998,"stars":5,"element":"Fire"},
{"name":"Kyouka","imagelink":"https://redive.estertion.win/icon/unit/103661.webp","id":103661,"range":998,"stars":5,"element":"Fire"},
{"id":181131,"name":"Shizuru & Rino","imagelink":"https://redive.estertion.win/icon/unit/181131.webp","element":"Light","__v":0,"range":998,"stars":5},
{"name":"Saren (Christmas)","imagelink":"https://redive.estertion.win/icon/unit/114531.webp","id":114531,"range":150,"stars":5,"element":"Light"},
{"name":"Pecorine (Overload)","imagelink":"https://redive.estertion.win/icon/unit/121031.webp","id":121031,"range":998,"stars":5,"element":"Fire"},
{"name":"Hiyori (New Year)","imagelink":"https://redive.estertion.win/icon/unit/108731.webp","id":108731,"range":998,"stars":5,"element":"Fire"},
{"name":"Tsumugi","imagelink":"https://redive.estertion.win/icon/unit/105461.webp","id":105461,"range":998,"stars":5,"element":"Fire"},
{"name":"Ayane","imagelink":"https://redive.estertion.win/icon/unit/102361.webp","id":102361,"range":998,"stars":5,"element":"Fire"},
{"name":"Christina (Wild)","imagelink":"https://redive.estertion.win/icon/unit/123831.webp","id":123831,"range":998,"stars":5,"element":"Fire"},
{"name":"Rei","imagelink":"https://redive.estertion.win/icon/unit/100361.webp","id":100361,"range":998,"stars":5,"element":"Fire"},
{"name":"Kurumi (Christmas)","imagelink":"https://redive.estertion.win/icon/unit/108531.webp","id":108531,"range":998,"stars":5,"element":"Fire"},
{"name":"Ilya (New Year)","imagelink":"https://redive.estertion.win/icon/unit/120931.webp","id":120931,"range":998,"stars":5,"element":"Fire"},
{"name":"Ayumi","imagelink":"https://redive.estertion.win/icon/unit/105561.webp","id":105561,"range":998,"stars":5,"element":"Fire"},
{"name":"Yori","imagelink":"https://redive.estertion.win/icon/unit/102261.webp","id":102261,"range":998,"stars":5,"element":"Fire"},
{"name":"Homare (New Year)","imagelink":"https://redive.estertion.win/icon/unit/124531.webp","id":124531,"range":998,"stars":5,"element":"Fire"},
{"name":"Io (Noir)","imagelink":"https://redive.estertion.win/icon/unit/119031.webp","id":119031,"range":998,"stars":5,"element":"Fire"},
{"name":"Kasumi (Magical)","imagelink":"https://redive.estertion.win/icon/unit/112231.webp","id":112231,"range":998,"stars":5,"element":"Fire"},
{"name":"Yuni (School Festival)","imagelink":"https://redive.estertion.win/icon/unit/116431.webp","id":116431,"range":998,"stars":5,"element":"Fire"},
{"id":128431,"name":"Hatsune (New Year)","imagelink":"https://redive.estertion.win/icon/unit/128431.webp","element":"Light","__v":0,"range":998,"stars":5},
{"name":"Kuuka (Noir)","imagelink":"https://redive.estertion.win/icon/unit/119131.webp","id":119131,"range":143,"stars":5,"element":"Dark"},
{"name":"Shizuru (Noir)","imagelink":"https://redive.estertion.win/icon/unit/120031.webp","id":120031,"range":998,"stars":5,"element":"Fire"},
{"name":"Chloe","imagelink":"https://redive.estertion.win/icon/unit/110831.webp","id":110831,"range":998,"stars":5,"element":"Fire"},
{"name":"Ninon (Ooedo)","imagelink":"https://redive.estertion.win/icon/unit/109631.webp","id":109631,"range":998,"stars":5,"element":"Fire"},
{"name":"Akino","imagelink":"https://redive.estertion.win/icon/unit/103261.webp","id":103261,"range":998,"stars":5,"element":"Fire"},
{"name":"Matsuri (Wild)","imagelink":"https://redive.estertion.win/icon/unit/123931.webp","id":123931,"range":998,"stars":5,"element":"Fire"},
{"name":"Ayane (Christmas)","imagelink":"https://redive.estertion.win/icon/unit/108631.webp","id":108631,"range":190,"stars":5,"element":"Water"},
{"name":"Hiyori","imagelink":"https://redive.estertion.win/icon/unit/100161.webp","id":100161,"range":998,"stars":5,"element":"Fire"},
{"name":"Misogi (Summer)","imagelink":"https://redive.estertion.win/icon/unit/122831.webp","id":122831,"range":998,"stars":5,"element":"Fire"},
{"name":"Inori (Time Travel)","imagelink":"https://redive.estertion.win/icon/unit/116531.webp","id":116531,"range":998,"stars":5,"element":"Fire"},
{"name":"Shefi (New Year)","imagelink":"https://redive.estertion.win/icon/unit/120731.webp","id":120731,"range":998,"stars":5,"element":"Fire"},
{"name":"Yori (Christmas)","imagelink":"https://redive.estertion.win/icon/unit/124131.webp","id":124131,"range":998,"stars":5,"element":"Fire"},
{"name":"Anna","imagelink":"https://redive.estertion.win/icon/unit/100961.webp","id":100961,"range":998,"stars":5,"element":"Fire"},
{"name":"Rin","imagelink":"https://redive.estertion.win/icon/unit/102661.webp","id":102661,"range":998,"stars":5,"element":"Fire"},
{"name":"Shinobu","imagelink":"https://redive.estertion.win/icon/unit/103161.webp","id":103161,"range":998,"stars":5,"element":"Fire"},
{"name":"Mahiru (Christmas)","imagelink":"https://redive.estertion.win/icon/unit/119231.webp","id":119231,"range":998,"stars":5,"element":"Fire"},
{"name":"Yukari (Christmas)","imagelink":"https://redive.estertion.win/icon/unit/114631.webp","id":114631,"range":998,"stars":5,"element":"Fire"},
{"name":"Monika","imagelink":"https://redive.estertion.win/icon/unit/105361.webp","id":105361,"range":998,"stars":5,"element":"Fire"},
{"name":"Mifuyu","imagelink":"https://redive.estertion.win/icon/unit/104861.webp","id":104861,"range":998,"stars":5,"element":"Fire"},
{"name":"Chika (Summer)","imagelink":"https://redive.estertion.win/icon/unit/117331.webp","id":117331,"range":998,"stars":5,"element":"Fire"},
{"name":"Aoi (Work Clothes)","imagelink":"https://redive.estertion.win/icon/unit/116731.webp","id":116731,"range":998,"stars":5,"element":"Fire"},
{"name":"Aoi (Transfer)","imagelink":"https://redive.estertion.win/icon/unit/110731.webp","id":110731,"range":998,"stars":5,"element":"Fire"},
{"name":"Shiori","imagelink":"https://redive.estertion.win/icon/unit/103861.webp","id":103861,"range":998,"stars":5,"element":"Fire"},
{"name":"Kurumi (Stage)","imagelink":"https://redive.estertion.win/icon/unit/121331.webp","id":121331,"range":998,"stars":5,"element":"Fire"},
{"name":"Yuki (Ooedo)","imagelink":"https://redive.estertion.win/icon/unit/117631.webp","id":117631,"range":998,"stars":5,"element":"Fire"},
{"name":"Akino (Summer)","imagelink":"https://redive.estertion.win/icon/unit/126731.webp","id":126731,"range":998,"stars":5,"element":"Fire"},
{"name":"Hiyori (Summer)","imagelink":"https://redive.estertion.win/icon/unit/122431.webp","id":122431,"range":998,"stars":5,"element":"Fire"},
{"name":"Tsumugi (Summer)","imagelink":"https://redive.estertion.win/icon/unit/117431.webp","id":117431,"range":998,"stars":5,"element":"Fire"},{"name":"Tomo (Magical)","imagelink":"https://redive.estertion.win/icon/unit/114331.webp","id":114331,"range":998,"stars":5,"element":"Fire"},{"name":"Shinobu (Halloween)","imagelink":"https://redive.estertion.win/icon/unit/108131.webp","id":108131,"range":998,"stars":5,"element":"Fire"},{"name":"Neneka (New Year)","imagelink":"https://redive.estertion.win/icon/unit/115031.webp","id":115031,"range":998,"stars":5,"element":"Fire"},{"name":"Rin (Halloween)","imagelink":"https://redive.estertion.win/icon/unit/123531.webp","id":123531,"range":998,"stars":5,"element":"Fire"},{"name":"Anne","imagelink":"https://redive.estertion.win/icon/unit/109231.webp","id":109231,"range":998,"stars":5,"element":"Fire"},{"name":"Misora","imagelink":"https://redive.estertion.win/icon/unit/118231.webp","id":118231,"range":998,"stars":5,"element":"Fire"},{"name":"Kyaru (Summer)","imagelink":"https://redive.estertion.win/icon/unit/107861.webp","id":107861,"range":998,"stars":5,"element":"Fire"},{"name":"Yuni","imagelink":"https://redive.estertion.win/icon/unit/111031.webp","id":111031,"range":998,"stars":5,"element":"Fire"},{"name":"Kuuka","imagelink":"https://redive.estertion.win/icon/unit/104561.webp","id":104561,"range":130,"stars":6,"element":"Dark"},{"name":"Muimi (New Year)","imagelink":"https://redive.estertion.win/icon/unit/114731.webp","id":114731,"range":998,"stars":5,"element":"Fire"},{"name":"Jun (Christmas)","imagelink":"https://redive.estertion.win/icon/unit/124231.webp","id":124231,"range":144,"stars":5,"element":"Light"},{"name":"Shinobu (Summer)","imagelink":"https://redive.estertion.win/icon/unit/127131.webp","id":127131,"range":998,"stars":5,"element":"Fire"},{"name":"Yukari (Summer)","imagelink":"https://redive.estertion.win/icon/unit/126831.webp","id":126831,"range":998,"stars":5,"element":"Fire"},{"name":"Kuuka (Summer)","imagelink":"https://redive.estertion.win/icon/unit/127031.webp","id":127031,"range":133,"stars":5,"element":"Dark"},{"name":"Kaori","imagelink":"https://redive.estertion.win/icon/unit/101761.webp","id":101761,"range":145,"stars":6,"element":"Fire"},{"name":"Pecorine","imagelink":"https://redive.estertion.win/icon/unit/105861.webp","id":105861,"range":155,"stars":6,"element":"Light"},{"name":"Makoto (Cinderella)","imagelink":"https://redive.estertion.win/icon/unit/115931.webp","id":115931,"range":998,"stars":5,"element":"Fire"},{"name":"Chloe (School Festival)","imagelink":"https://redive.estertion.win/icon/unit/116231.webp","id":116231,"range":998,"stars":5,"element":"Fire"},{"name":"Hiyori (Princess)","imagelink":"https://redive.estertion.win/icon/unit/180131.webp","id":180131,"range":998,"stars":5,"element":"Fire"},{"name":"Chieru (Festival)","imagelink":"https://redive.estertion.win/icon/unit/116331.webp","id":116331,"range":998,"stars":5,"element":"Fire"},{"name":"Tamaki (Summer)","imagelink":"https://redive.estertion.win/icon/unit/107931.webp","id":107931,"range":998,"stars":5,"element":"Fire"},{"name":"Yukari","imagelink":"https://redive.estertion.win/icon/unit/103461.webp","id":103461,"range":998,"stars":5,"element":"Fire"},{"name":"Mitsuki","imagelink":"https://redive.estertion.win/icon/unit/105161.webp","id":105161,"range":998,"stars":5,"element":"Fire"},{"name":"Karin (Alchemist)","imagelink":"https://redive.estertion.win/icon/unit/125731.webp","id":125731,"range":998,"stars":5,"element":"Fire"},{"name":"Kyaru (Overload)","imagelink":"https://redive.estertion.win/icon/unit/121131.webp","id":121131,"range":998,"stars":5,"element":"Fire"},{"name":"Shiori (Ranger)","imagelink":"https://redive.estertion.win/icon/unit/125431.webp","id":125431,"range":998,"stars":5,"element":"Fire"},{"name":"Kyaru","imagelink":"https://redive.estertion.win/icon/unit/106061.webp","id":106061,"range":998,"stars":5,"element":"Fire"},{"name":"Suzuna (Halloween)","imagelink":"https://redive.estertion.win/icon/unit/117931.webp","id":117931,"range":998,"stars":5,"element":"Fire"},{"name":"Tsumugi (Halloween)","imagelink":"https://redive.estertion.win/icon/unit/113931.webp","id":113931,"range":152,"stars":5,"element":"Dark"},{"name":"Ruka (Sarasaria)","imagelink":"https://redive.estertion.win/icon/unit/127631.webp","id":127631,"range":998,"stars":5,"element":"Fire"},{"name":"Ruka (New Year)","imagelink":"https://redive.estertion.win/icon/unit/120831.webp","id":120831,"range":998,"stars":5,"element":"Fire"},{"name":"Muimi (Liberator)","imagelink":"https://redive.estertion.win/icon/unit/125031.webp","id":125031,"range":998,"stars":5,"element":"Fire"},{"name":"Vikala","imagelink":"https://redive.estertion.win/icon/unit/125631.webp","id":125631,"range":998,"stars":5,"element":"Fire"},{"name":"Ilya","imagelink":"https://redive.estertion.win/icon/unit/104461.webp","id":104461,"range":998,"stars":5,"element":"Fire"},{"name":"Kaori (Summer)","imagelink":"https://redive.estertion.win/icon/unit/110531.webp","id":110531,"range":998,"stars":5,"element":"Fire"},{"name":"Monika (Cafe)","imagelink":"https://redive.estertion.win/icon/unit/125231.webp","id":125231,"range":998,"stars":5,"element":"Fire"},{"name":"Precia (Fallen)","imagelink":"https://redive.estertion.win/icon/unit/126131.webp","id":126131,"range":998,"stars":5,"element":"Fire"},{"name":"Mifuyu (Summer)","imagelink":"https://redive.estertion.win/icon/unit/108031.webp","id":108031,"range":998,"stars":5,"element":"Fire"},{"name":"Yori (Angel)","imagelink":"https://redive.estertion.win/icon/unit/113831.webp","id":113831,"range":998,"stars":5,"element":"Fire"},{"name":"Akari","imagelink":"https://redive.estertion.win/icon/unit/100661.webp","id":100661,"range":998,"stars":5,"element":"Fire"},{"name":"Saren (Summer)","imagelink":"https://redive.estertion.win/icon/unit/110331.webp","id":110331,"range":998,"stars":5,"element":"Fire"},{"name":"Miyako (Halloween)","imagelink":"https://redive.estertion.win/icon/unit/108231.webp","id":108231,"range":998,"stars":5,"element":"Fire"},{"name":"Arisa","imagelink":"https://redive.estertion.win/icon/unit/106361.webp","id":106361,"range":998,"stars":5,"element":"Fire"},{"name":"Kaiser Insight","imagelink":"https://redive.estertion.win/icon/unit/106931.webp","id":106931,"range":998,"stars":5,"element":"Fire"},{"name":"Rino","imagelink":"https://redive.estertion.win/icon/unit/101161.webp","id":101161,"range":998,"stars":5,"element":"Fire"},{"name":"Misato","imagelink":"https://redive.estertion.win/icon/unit/101561.webp","id":101561,"range":998,"stars":5,"element":"Fire"},{"name":"Yui (New Year)","imagelink":"https://redive.estertion.win/icon/unit/108831.webp","id":108831,"range":998,"stars":5,"element":"Fire"},{"name":"Suzuna (Transfer Student)","imagelink":"https://redive.estertion.win/icon/unit/127331.webp","id":127331,"range":998,"stars":5,"element":"Fire"},{"name":"Creditta","imagelink":"https://redive.estertion.win/icon/unit/118031.webp","id":118031,"range":998,"stars":5,"element":"Fire"},{"name":"Croce","imagelink":"https://redive.estertion.win/icon/unit/126431.webp","id":126431,"range":998,"stars":5,"element":"Fire"},{"name":"Mahiru (Ranger)","imagelink":"https://redive.estertion.win/icon/unit/112831.webp","id":112831,"range":998,"stars":5,"element":"Fire"},{"name":"Labyrista","imagelink":"https://redive.estertion.win/icon/unit/106831.webp","id":106831,"range":998,"stars":5,"element":"Fire"},{"name":"Ilya (Ritual Garment)","imagelink":"https://redive.estertion.win/icon/unit/126231.webp","id":126231,"range":998,"stars":5,"element":"Fire"},{"name":"Yui (Ceremonial)","imagelink":"https://redive.estertion.win/icon/unit/115631.webp","id":115631,"range":998,"stars":5,"element":"Fire"},{"name":"Mitsuki (New Year)","imagelink":"https://redive.estertion.win/icon/unit/124731.webp","id":124731,"range":998,"stars":5,"element":"Fire"},{"name":"Neneka","imagelink":"https://redive.estertion.win/icon/unit/107031.webp","id":107031,"range":998,"stars":5,"element":"Fire"},{"name":"Suzuna","imagelink":"https://redive.estertion.win/icon/unit/101661.webp","id":101661,"range":998,"stars":5,"element":"Fire"},{"name":"Karin","imagelink":"https://redive.estertion.win/icon/unit/118531.webp","id":118531,"range":998,"stars":5,"element":"Fire"},{"name":"Chika","imagelink":"https://redive.estertion.win/icon/unit/104261.webp","id":104261,"range":998,"stars":5,"element":"Fire"},{"name":"Maho (Explorer)","imagelink":"https://redive.estertion.win/icon/unit/123131.webp","id":123131,"range":998,"stars":5,"element":"Fire"},{"name":"Kyouka (Summer)","imagelink":"https://redive.estertion.win/icon/unit/122731.webp","id":122731,"range":998,"stars":5,"element":"Fire"},{"name":"Tomo (Halloween)","imagelink":"https://redive.estertion.win/icon/unit/123631.webp","id":123631,"range":998,"stars":5,"element":"Fire"},{"name":"Shizuru","imagelink":"https://redive.estertion.win/icon/unit/104961.webp","id":104961,"range":998,"stars":5,"element":"Fire"},{"name":"Christina","imagelink":"https://redive.estertion.win/icon/unit/107161.webp","id":107161,"range":998,"stars":5,"element":"Fire"},{"name":"Nea","imagelink":"https://redive.estertion.win/icon/unit/123331.webp","id":123331,"range":998,"stars":5,"element":"Fire"},{"name":"Kokkoro (Ceremonial)","imagelink":"https://redive.estertion.win/icon/unit/115531.webp","id":115531,"range":998,"stars":5,"element":"Fire"},{"name":"Vampy","imagelink":"https://redive.estertion.win/icon/unit/122331.webp","id":122331,"range":998,"stars":5,"element":"Fire"},{"name":"Hatsune (Summer)","imagelink":"https://redive.estertion.win/icon/unit/113431.webp","id":113431,"range":998,"stars":5,"element":"Fire"},{"name":"Ayumi (Phantom Thief)","imagelink":"https://redive.estertion.win/icon/unit/121531.webp","id":121531,"range":998,"stars":5,"element":"Fire"},{"name":"Aoi (Camp)","imagelink":"https://redive.estertion.win/icon/unit/122131.webp","id":122131,"range":998,"stars":5,"element":"Fire"},{"name":"Ames","imagelink":"https://redive.estertion.win/icon/unit/123031.webp","id":123031,"range":998,"stars":5,"element":"Fire"},{"name":"Hatsune","imagelink":"https://redive.estertion.win/icon/unit/101261.webp","id":101261,"range":998,"stars":5,"element":"Fire"},{"name":"Misaki (Halloween)","imagelink":"https://redive.estertion.win/icon/unit/108331.webp","id":108331,"range":998,"stars":5,"element":"Fire"},{"name":"Kaori (Halloween)","imagelink":"https://redive.estertion.win/icon/unit/117731.webp","id":117731,"range":998,"stars":5,"element":"Fire"},{"name":"Kokkoro (New Year)","imagelink":"https://redive.estertion.win/icon/unit/111931.webp","id":111931,"range":998,"stars":5,"element":"Fire"},{"name":"Makoto","imagelink":"https://redive.estertion.win/icon/unit/104361.webp","id":104361,"range":998,"stars":5,"element":"Fire"},{"name":"Jun (Summer)","imagelink":"https://redive.estertion.win/icon/unit/113631.webp","id":113631,"range":998,"stars":5,"element":"Fire"},{"name":"Chieru","imagelink":"https://redive.estertion.win/icon/unit/110931.webp","id":110931,"range":998,"stars":5,"element":"Fire"},{"name":"Eriko","imagelink":"https://redive.estertion.win/icon/unit/102761.webp","id":102761,"range":998,"stars":5,"element":"Fire"},{"name":"Mimi (Halloween)","imagelink":"https://redive.estertion.win/icon/unit/111331.webp","id":111331,"range":998,"stars":5,"element":"Fire"},{"name":"Pecorine (Christmas)","imagelink":"https://redive.estertion.win/icon/unit/127931.webp","id":127931,"range":998,"stars":5,"element":"Fire"},{"name":"Mahiru","imagelink":"https://redive.estertion.win/icon/unit/103361.webp","id":103361,"range":998,"stars":5,"element":"Fire"},{"name":"Nozomi (Christmas)","imagelink":"https://redive.estertion.win/icon/unit/111631.webp","id":111631,"range":998,"stars":5,"element":"Fire"},{"name":"Yukari (Camp)","imagelink":"https://redive.estertion.win/icon/unit/122231.webp","id":122231,"range":998,"stars":5,"element":"Fire"},{"name":"Kokkoro (Summer)","imagelink":"https://redive.estertion.win/icon/unit/107661.webp","id":107661,"range":998,"stars":5,"element":"Fire"},{"name":"Rem","imagelink":"https://redive.estertion.win/icon/unit/109731.webp","id":109731,"range":998,"stars":5,"element":"Fire"},{"name":"Maho (Cinderella)","imagelink":"https://redive.estertion.win/icon/unit/116031.webp","id":116031,"range":998,"stars":5,"element":"Fire"},{"name":"Misato (New Year)","imagelink":"https://redive.estertion.win/icon/unit/124631.webp","id":124631,"range":998,"stars":5,"element":"Fire"},{"name":"Kasumi","imagelink":"https://redive.estertion.win/icon/unit/101461.webp","id":101461,"range":998,"stars":5,"element":"Fire"},{"name":"Misaki","imagelink":"https://redive.estertion.win/icon/unit/105061.webp","id":105061,"range":998,"stars":5,"element":"Fire"},{"name":"Yui (Princess)","imagelink":"https://redive.estertion.win/icon/unit/180231.webp","id":180231,"range":998,"stars":5,"element":"Fire"},{"name":"Akino (Christmas)","imagelink":"https://redive.estertion.win/icon/unit/114431.webp","id":114431,"range":998,"stars":5,"element":"Fire"},{"name":"Tamaki","imagelink":"https://redive.estertion.win/icon/unit/104661.webp","id":104661,"range":998,"stars":5,"element":"Fire"},{"name":"Tamaki (Work Clothes)","imagelink":"https://redive.estertion.win/icon/unit/116831.webp","id":116831,"range":998,"stars":5,"element":"Fire"},{"name":"Rei (Summer)","imagelink":"https://redive.estertion.win/icon/unit/122531.webp","id":122531,"range":998,"stars":5,"element":"Fire"},{"name":"Anna (Summer)","imagelink":"https://redive.estertion.win/icon/unit/113231.webp","id":113231,"range":998,"stars":5,"element":"Fire"},{"name":"Ayane (Explorer)","imagelink":"https://redive.estertion.win/icon/unit/123231.webp","id":123231,"range":998,"stars":5,"element":"Fire"},{"name":"Labyrista (Overload)","imagelink":"https://redive.estertion.win/icon/unit/121231.webp","id":121231,"range":998,"stars":5,"element":"Fire"},{"name":"Uzuki (Idolmaster)","imagelink":"https://redive.estertion.win/icon/unit/112431.webp","id":112431,"range":998,"stars":5,"element":"Fire"},{"name":"Shizuru (Valentine)","imagelink":"https://redive.estertion.win/icon/unit/109131.webp","id":109131,"range":998,"stars":5,"element":"Fire"},{"name":"Nozomi (Liberator)","imagelink":"https://redive.estertion.win/icon/unit/124831.webp","id":124831,"range":998,"stars":5,"element":"Fire"},{"name":"Saren","imagelink":"https://redive.estertion.win/icon/unit/102861.webp","id":102861,"range":998,"stars":5,"element":"Fire"},{"name":"Riri (Fallen)","imagelink":"https://redive.estertion.win/icon/unit/125831.webp","id":125831,"range":998,"stars":5,"element":"Fire"},{"name":"Nanaka (Summer)","imagelink":"https://redive.estertion.win/icon/unit/113331.webp","id":113331,"range":998,"stars":5,"element":"Fire"},{"name":"Kokkoro (Princess)","imagelink":"https://redive.estertion.win/icon/unit/180531.webp","id":180531,"range":998,"stars":5,"element":"Fire"},{"name":"Ranpha (Summer)","imagelink":"https://redive.estertion.win/icon/unit/126931.webp","id":126931,"range":998,"stars":5,"element":"Fire"},{"name":"Suzume","imagelink":"https://redive.estertion.win/icon/unit/102561.webp","id":102561,"range":998,"stars":5,"element":"Fire"},{"name":"Creditta (Christmas))","imagelink":"https://redive.estertion.win/icon/unit/128031.webp","id":128031,"range":998,"stars":5,"element":"Fire"}]

const RosterunitSkeleton = () => {

  const handleClick = (item) => {
    const itemid = parseInt(item.id);
  };

  const [state, formAction] = useFormState(updateMemberRoster, {
    message: "",
    errors: undefined,
  });

useEffect(() => {
  if(state.message === "success"){
    toast.success('Updated roster.')
  } else if(state.message === "error") {
    toast.error(state.errors)
  }
});



  return (
    <>
    <div className={styles.top}>
          <Search placeholder="Search a unit..."/>
          <form action={formAction} className={styles.form}>
          <input type="hidden" name="id" value="" />
          <input type="hidden" name="rosterstring" value="" />
          <button className={`${styles.button} ${styles.submit}`}>
            Submit
          </button>
        </form>
        </div>
      <div className={styles.container}>
        {data.map((item) => (
          <div key={item.id} className={styles.rosterItem}>
            <Image width={128} height={128}
              src={item.imagelink}
              alt={item.name}
              title={item.name}
              className={styles.normalImg}
              onClick={() => handleClick(item)}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default RosterunitSkeleton;