<script setup>
import { ref } from 'vue';
// const { postUrl, porepUrl, retrievalUrl, storagemarketUrl } = useImg();

const categories = ref([
{
    name: '파일코인',
    subCategories: [
    {
        seqNo: '01',
        name: '분산스토리지 네트워크',
        content: `
            <div class="content3">
                <div class="mb-3">
                    <span>· 비잔틴 협정 (Byzantine Agreements)</span>
                </div>
                <div class="mb-6">
                    <span class="mr-2"></span><span>높은 처리량, 네트워크 확장성 및 낮은 트랜잭션 비용을 위해 사용</span>
                </div>
                <div class="mb-3">
                    <span>· 가십 프로토콜 (Gossip Protocol)</span>
                </div>
                <div class="mb-6">
                    <span class="mr-2"></span><span>소셜 네트워크가 정보를 퍼뜨리는 방식</span>
                </div>   
                <div class="mb-3">
                    <span>· CRDT (Conflict-free Replicated Data Type)</span>
                </div>
                <div class="mb-6">
                    <span class="mr-2"></span><span>충돌이 없는 복제 데이터 타입</span>
                </div>   
            </div>
            `
    },
    {
        seqNo: '02',
        name: '새로운 스토리지 증명',
        content:  `
                <div class="content2">
                    <div class="content2-item">
                        <div class="content2-img-wrapper">
                            <img src="/layout/images/web3/porep.webp" alt="porep" class="content2-img" />
                        </div>                        
                        <div>복제증명 _PoRep</div>
                        <div>Proof of Replication</div>
                    </div>
                    <div class="content2-item">
                        <div class="content2-img-wrapper">
                            <img src="/layout/images/web3/post.webp" alt="porep" class="content2-img" />
                        </div>
                        <div>시공간증명 _PoST</div>
                        <div>Proof of SpaceTime</div>
                    </div>
                </div>
            `
    },
    {
        seqNo: '03',
        name: '검증 가능한 시장',
        content:  `
                <div class="content2">
                    <div class="content2-item">
                        <div class="content2-img-wrapper">
                            <img src="/layout/images/web3/storagemarket.webp" alt="porep" class="content2-img" />
                        </div>                        
                        <div>스토리지 시장</div>
                        <div>Storage Market</div>
                    </div>
                    <div class="content2-item">
                        <div class="content2-img-wrapper">
                            <img src="/layout/images/web3/retrieval.webp" alt="porep" class="content2-img" />
                        </div>
                        <div>검색(회수) 시장</div>
                        <div>Retrieval Market</div>
                    </div>
                </div>
            `
    },
    {
        seqNo: '04',
        name: '유용한 작업증명서',
        content:  `
            <div class="content3">
                <div class="mb-3">
                    <span>· 합의 프로토콜에서 사용할 수 있는 시공간증명</span>
                </div>
                <div class="mb-6">
                    <span class="mr-2"></span><span>(Proof-of-Spacetime)에 근거한 유용한 작업증명서를 구성</span>
                </div>

                <div class="mb-3">
                    <span>· 마이너는 블록을 채굴하기 위해 낭비적인 계산을 할 필요가 없고</span>
                </div>
                <div class="mb-6">
                    <span class="mr-2"></span><span>대신 네트워크에 데이터를 저장</span>
                </div>
            </div>
            `
    },
    ]
},
{
    name: '알레오 크레딧(준비중)',
    subCategories: [
    {
        seqNo: '01',
        name: '제로-지식 암호화',
        content: '제로-지식 암호화: 준비중입니다.'
    },
    {
        seqNo: '02',
        name: 'Leo 프로그래밍 언어',
        content: 'Leo 프로그래밍 언어: 준비중입니다.'
    },
    {
        seqNo: '03',
        name: 'AleoBFT 합의 프로토콜',
        content: 'AleoBFT 합의 프로토콜: 준비중입니다.'
    },
    {
        seqNo: '04',
        name: '제로-지식 실행을 위한 가상 머신',
        content: '제로-지식 실행을 위한 가상 머신: 준비중입니다.'
    },
    ]
}
]);

const activeCategory = ref(0);
const activeSubCategory = ref(0);

const changeCategory = (index) => {
    if (index == 1) return; // 준비중
    
    activeCategory.value = index;
    activeSubCategory.value = 0; 
};

const changeSubCategory = (index) => {
    activeSubCategory.value = index;
};
</script>

<template>
    <div class="dual-tab-view">
        <div class="left-panel">
            <div class="category-tabs">
                <span
                    v-for="(category, categoryIndex) in categories"
                    :key="categoryIndex"
                    :class="{'active-tab': activeCategory === categoryIndex, 'inactive-tab': activeCategory !== categoryIndex}"
                    @click="changeCategory(categoryIndex)"
                >
                    > {{ category.name }}
                </span>
            </div>
            <div class="sub-category-tabs">
                <div
                    v-for="(subCategory, subCategoryIndex) in categories[activeCategory].subCategories"
                    :key="subCategoryIndex"
                    :class="{'active-tab': activeSubCategory === subCategoryIndex, 'inactive-tab': activeSubCategory !== subCategoryIndex}"
                    @click="changeSubCategory(subCategoryIndex)"
                >
                    <div :class="{'point mb-2': activeSubCategory === subCategoryIndex, 'point2 mb-2': activeSubCategory !== subCategoryIndex}">
                        <span>{{ subCategory.seqNo }}</span>
                    </div>
                    <div class="mb-3">
                        <span>{{ subCategory.name }}</span>
                    </div>
                    
                    <div class="separator"></div>
                </div>
            </div>
        </div>
    
        <div class="right-panel">
            <div class="content-wrapper">
                <div class="content" v-html="categories[activeCategory].subCategories[activeSubCategory].content"></div>
            </div>
        </div>
    </div>
  </template>
  

<style>
.content3 {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.content2 {
    display: flex;
    justify-content: space-between;
    height: 100%;
}

.content2-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 1rem;
    height: 100%;
}

.content2-img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    margin-bottom: 0.5rem;
}
@media (max-width: 890px) {
    .content3 {
        font-size: 12px;
    }
    .content2 {
        display: flex;
        justify-content: space-between;
        height: 100%;
        font-size: 9px;
    }

    .content2-item {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 0 1rem;
        height: 100%;
    }

    .content2-img {
        width: 50px;
        height: 50px;
        object-fit: cover;
        margin-bottom: 0.5rem;
    }
}
</style>
<style scoped>
.dual-tab-view {
    display: flex;
    justify-content: space-between;
    width: 100%;
    color: #FFFFFF;
}

.left-panel {
    /* width: 30%; */
    width: 300px;
    .category-tabs {
        display: flex;
        flex-direction: column;
        justify-content: start;
        margin-bottom: 20px;
        font-size: 26px;
    }
    .sub-category-tabs {
        display: flex;
        flex-direction: column;
        justify-content: start;
        margin-bottom: 20px;
        font-size: 17px;  
        width: 100%;
    }
}
.point {
    color: #057FFC
}
.point2 {
    color: rgb(8,43,81)
    
}
.category-tabs span, .sub-category-tabs span {
    padding: 10px;
    cursor: pointer;
    margin-right: 10px;
}

.right-panel {
    width: calc(100% - 300px);
    padding: 2rem;
    .content-wrapper {
        /* width: 704px; */
        height: 100%;
        .content {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 100%;
            border-radius: 15px;
            background-color: rgba(28, 28, 28, 1);
            color: #FFFFFF;
            font-size: 20px;
            padding: 3rem;
        }
    }
}

.active-tab {
    color: #FFFFFF;
}

.inactive-tab {
    color: #525252;
}

.separator {
    width: 100%;
    height: 2px;
    background-color: #707070;
    margin-bottom: 20px;
}



@media (max-width: 890px) {
    .dual-tab-view {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        padding: 0rem;
        color: #FFFFFF;
    }

    .left-panel {
        width: 100%;
    }
    .point {
        color: #057FFC
    }
    .point2 {
        color: rgb(8,43,81)   
    }
    .category-tabs {
        display: flex;
        flex-direction: row;
        justify-content: start;
        margin-bottom: 20px;
        font-size: 24px;
    }
    .sub-category-tabs {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        margin-bottom: 20px;
        font-size: 12px;  
    }
    .category-tabs span, .sub-category-tabs span {
        padding: 10px;
        cursor: pointer;
        margin-right: 10px;
    }

    .right-panel {
        width: 100%;
        padding: 0.5rem;
        .content-wrapper {
            width: 100%;
            height: 100%;
            .content {
                display: flex;
                flex-direction: column;
                width: 100%;
                height: 100%;
                border-radius: 15px;
                background-color: rgba(28, 28, 28, 1);
                color: #FFFFFF;
                font-size: 12px;
                padding: 3rem 1rem;
            }
        }
    }

    .active-tab {
        color: #FFFFFF;
        /* border-bottom: 2px solid #000; */
    }

    .inactive-tab {
        color: #525252;
    }

    .separator {
        width: 100%;
        height: 2px;
        background-color: #707070;
        margin-bottom: 20px;
    }

}
</style>
  