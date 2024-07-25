import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';
const Sidebar = () => {
    const [height, setHeight] = useState(0);
    const [showSubmenu, setShowSubMenu] = useState(false);
    const myRef = useRef();
    const myul = useRef();
    useEffect(() => {
        if (showSubmenu) {
            setHeight(myul.current.clientHeight + 10);
        } else {
            setHeight(0);
        }
    }, [showSubmenu]);
    const HandeleshowSubmenu = (item) => {
        setShowSubMenu(!showSubmenu);
    };
    return (
        <>
            <div className="sidebar-wrapper">
                <div className="sidebar-box">
                    <div className="profile-avatar">
                        <img
                            src="https://scontent.fbmv1-1.fna.fbcdn.net/v/t1.6435-9/113648944_3256090607781692_4790311711389984939_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHY3TpYO52HNc19Xd1dseu5rDeG_WIVB-KsN4b9YhUH4lIgT7Af9TR-AR-lNnaBz8ZzpUGWWUZx83yOVCKusKBx&_nc_ohc=R1NC7rJ9MboQ7kNvgEEzCNM&_nc_ht=scontent.fbmv1-1.fna&oh=00_AYD_2sSYEFJ3hk_i6IhZAbog4Tmldbk5s2qjoeW-QiWjzA&oe=66743519"
                            alt=""
                        />
                    </div>
                    <ul className="centered-ul">
                        <li className="d-flex align-items-center" onClick={HandeleshowSubmenu}>
                            <i class="fa-solid fa-folder-plus me-1"></i>
                            create
                            {showSubmenu ? (
                                <i class="fa-solid fa-caret-down ms-1" style={{ marginTop: '2px' }}></i>
                            ) : (
                                <i class="fa-solid fa-caret-up ms-1" style={{ marginTop: '2px' }}></i>
                            )}
                        </li>
                        <div ref={myRef} class="sub-menu" style={{ height: height }}>
                            <ul ref={myul}>
                                <Link to={'/'}>
                                    <li className="d-flex align-items-center">
                                        <i
                                            class="fa-solid fa-certificate me-3 "
                                            style={{ color: 'rgb(92, 60, 248);', fontSize: '10px' }}
                                        ></i>
                                        content
                                    </li>
                                </Link>
                                <Link to={'/admin/create-category'}>
                                    <li>
                                        <i
                                            class="fa-solid fa-certificate me-3 "
                                            style={{ color: 'rgb(92, 60, 248)', fontSize: '10px' }}
                                        ></i>
                                        category
                                    </li>
                                </Link>
                                <Link to={'/admin/create-list'}>
                                    <li>
                                        <i
                                            class="fa-solid fa-certificate me-3 "
                                            style={{ color: 'rgb(92, 60, 248)', fontSize: '10px' }}
                                        ></i>
                                        list
                                    </li>
                                </Link>
                                <Link to={'/admin/crawl'}>
                                    <li>
                                        <i
                                            class="fa-solid fa-certificate me-3 "
                                            style={{ color: 'rgb(92, 60, 248)', fontSize: '10px' }}
                                        ></i>
                                        crawl craft
                                    </li>
                                </Link>
                            </ul>
                        </div>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
