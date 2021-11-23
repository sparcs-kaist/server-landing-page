export default {
    "channeltalk": {
        "name": "Channeltalk",
        "name-kr": "채널톡",
        "desc": "해당 서버는 2021년도 말에 채널톡에서 후원해 주신 서버입니다. ELK, OTL DB Script 등 SPARCS 내외부 서비스 연결용 및 데이터 보존 목적으로 사용되고 있습니다.",
        "logo_url": "https://channel.io/images2/common/ch-logo-ko.png",
        "link_name": "채널톡 바로가기",
        "link": "https://channel.io",
        "spec": {
            "cpu": "Intel(R) Xeon(R) Silver 4120R @ 2.4GHz",
            "ram": "16GB RDIMM",
            "hdd": "1TB SATA",
            "os": "Red Hat (R) Enterprise Linux"
        },
        "services": {
            "ELK": {
                "links": ["https://elk.sparcs.org", "https://elastic.co"],
                "desc": "\"ELK\"는 Elasticsearch, Logstash 및 Kibana, 이 오픈 소스 프로젝트 세 개의 머리글자입니다. Elasticsearch는 검색 및 분석 엔진입니다. Logstash는 여러 소스에서 동시에 데이터를 수집하여 변환한 후 Elasticsearch 같은 “stash”로 전송하는 서버 사이드 데이터 처리 파이프라인입니다. Kibana는 사용자가 Elasticsearch에서 차트와 그래프를 이용해 데이터를 시각화할 수 있게 해줍니다. 추후 개발될 예정입니다.",
                "name": "ELK"
            },
            "OTL-Scripts": {
                "desc": "AWS로 운영되고 있는 OTL 인스턴스에서 KAIST 교내 망에 위치해 있는 학사 DB로부터 데이터를 받아 오기 위한 스크립트들이 작동하고 있는 서비스입니다. 곧 garam 서버로부터 migration될 예정입니다.",
                "name": "OTL Scripts"
            },
            "Backups": {
                "links": ["https://backups.sparcs.org"],
                "desc": "SPARCS 외부 서비스 및 내부 서비스의 중요한 데이터들을 백업합니다. 추후 개발될 예정입니다.",
                "name": "Backups"
            }
        }
    },

    "kong": {
        "name": "Kong",
        "name-kr": "콩",
        "desc": "해당 서버는 2019년 초에 KAIST 정보통신팀으로부터 지원을 받았습니다. Mail, Memvers, LDAP 등 SPARCS 내부 서비스 용으로 사용하고 있습니다.",
        "logo_url": "/kong.png",
        "spec": {
            "cpu": "Intel(R) Xeon(R) CPU E3-1240 v6 @ 3.70GHz",
            "ram": "8GB",
            "ssd": "250GB SSD x2",
            "os": "Ubuntu 18.04.2 LTS"
        },
        "services": {
            "mail": {
                "links": ["https://mail.sparcs.org"],
                "desc": "Docker 기반의 SPARCS의 메일 서비스입니다. postfix + dovecot 등으로 구성되어 있습니다. Gmail 등으로 메일 가져오기 설정을 하실 수 있으며, 아래 링크로부터 roundcube 웹메일을 사용하실 수도 있습니다.",
                "name": "Mail"
            },
            "Memvers":{
                "links": ["https://memvers.sparcs.org"],
                "desc": "사용자와 메일링 리스트 관리 서버 입니다. 자신을 소개하는 정보를 입력하고, 다른 회원의 정보를 찾는 도구인 nugu도 포함되었습니다. API 서버만 Kong에 띄워져 있으며, 프론트엔드는 AWS Cloudfront로 배포되고 있습니다.",
                "name": "Memvers"
            },
            "ldap": {
                "links": ["https://phpldapadmin.sparcs.org", "ldap://ldap.sparcs.org"],
                "desc": "SPARCS 전체 회원들의 계정을 관리하는 LDAP 서비스입니다. 물리 서버, Memvers, 메일 서버, Whale, Vault, 동방 컴퓨터 같은 내부 서비스들의 로그인과 연동되어 있습니다. Whale, Vault 같은 서비스들은 LDAP Group을 이용해 권한 구분을 합니다. LDAP 관리를 웹 상에서 편하게 도와주는 phpldapadmin 서비스도 운영하고 있습니다.",
                "name": "LDAP"
            },
            "Wiki": {
                "links": ["https://wiki.sparcs.org"],
                "desc": "Notion으로 문서화하기 전, SPARCS에서 주로 사용하던 미디어 기반의 위키위키입니다. SPARCS의 TMI나 옛날 일 같은 것들이 많이 적혀있지만, 업데이트가 잘 안 된지 조금 시간이 지났습니다. 그래도 사용중인 ip 및 활동중인 휠, 임원진 멤버 등은 최근까지 관리되었습니다. 휠 문서 등 종종 유용한 정보들도 있으니 한번 읽어보셔도 좋을 것 같습니다.",
                "name": "Wiki"
            },
            "Vault": {
                "links": ["https://secret.sparcs.org"],
                "desc": "SPARCS 내부적으로 안전하게, 그리고 구성원들에 맞게 secrets을 관리하기 위해서 도입된 서비스입니다. 현재는 간단한 key-value 형식의 secrets만 저장되어 있지만, 추가적인 셋팅을 통해 프로젝트들의 secrets 도 관리할 수 있을 것으로 기대됩니다.",
                "name": "Vault"

            }
        }
    },

    "ssal": {
        "name": "Ssal",
        "name-kr": "쌀",
        "desc": "해당 서버는 개발용 서버입니다. SPARCS 신입생들이 프로젝트를 배포할 때 주로 사용하며, 내부 회원들도 사용하실 수 있습니다. 데스크탑 서버로 구성되었습니다.",
        "logo_url": "/ssal.png",
        "spec": {
            "cpu": "Intel(R) Core(TM) i5 CPU 750  @ 2.67GHz",
            "ram": "16GB",
            "hdd": "450GB",
            "os": "Ubuntu"
        },
        "services": {
            "Whale": {
                "links": ["https://whale.sparcs.org"],
                "desc": "사용자들이 docker 컨테이너를 마음대로 띄울 수 있게 하는 서비스 입니다. ubuntu_sparcs 이미지를 사용하실 수 있습니다. 2021년도에 Portainer 버전이 업그레이드 되었으며, 로그인이 기존 SSO 방식에서 LDAP 방식으로 바뀌었습니다.",
                "name": "Whale"
            }
        }
    },

    "aria": {
        "name": "Aria",
        "name-kr": "아리아",
        "desc": "해당 서버는 GTX 1080 Ti가 두 장 꽂혀있는 머신러닝 서버입니다. SPARCS 회원분들께서 GPU 서버가 필요할 때 컨테이너를 만들어서 사용할 수 있습니다.",
        "logo_url": "/a.png",
        "spec": {
            "cpu": "Intel(R) Core(TM) i7-7700 CPU @ 3.60GHz",
            "ram": "32GB",
            "ssd": "250GB",
            "hdd": "1TB",
            "os": "Ubuntu 18.04.6 LTS"
        },
        "services": {
            "Moby": {
                "links": ["https://moby.sparcs.org"],
                "desc": "사용자들이 docker 컨테이너를 마음대로 띄울 수 있게 하는 서비스 입니다. Whale과 마찬가지로 portainer를 사용하고 있습니다. tensorflow_sparcs, pytorch_sparcs 이미지를 사용하실 수 있습니다.",
                "name": "Moby"
            }
        }
    },

    "localhost": {
        "name": "Localhost",
        "desc": "Localhost 서버입니다. SPARCS에 새로운 서버가 들어온 경우, assets/content.js 파일에 서버의 정보를 추가해 주세요. ",
        "spec": {
            "cpu": "Your CPU",
            "ram": "Your RAM",
            "ssd": "Your SSD",
            "hdd": "Your HDD",
            "os": "Your OS"
        },
        "services": {
            "Test": {
                "links": ["http://localhost"],
                "desc": "로컬 호스트 서비스입니다.",
                "name": "Test"
            }
        }
    }
}