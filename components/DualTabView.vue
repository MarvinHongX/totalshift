<script setup>
import { ref } from 'vue';

const categories = ref([
{
    name: '파일코인',
    subCategories: [
    {
        seqNo: '01',
        name: '분산스토리지 네트워크',
        content: `
        <div class="mb-3">
                        <span>· 비잔틴 협정 (Byzantine Agreements)</span>
                    </div>
                    <div class="mb-6">
                        <span>· 높은 처리량, 네트워크 확장성 및 낮은 트랜잭션 비용을 위해 사용</span>
                    </div>
                    <div class="mb-3">
                        <span>· 가십 프로토콜 (Gossip Protocol)</span>
                    </div>
                    <div class="mb-6">
                        <span>· 소셜 네트워크가 정보를 퍼뜨리는 방식</span>
                    </div>   
                    <div class="mb-3">
                        <span>· CRDT (Conflict-free Replicated Data Type)</span>
                    </div>
                    <div class="mb-6">
                        <span>· 충돌이 없는 복제 데이터 타입</span>
                    </div>   
            `
    },
    {
        seqNo: '02',
        name: '새로운 스토리지 증명',
        content: 'Content for SubCategory 1-2'
    },
    {
        seqNo: '03',
        name: '검증 가능한 시장',
        content: 'Content for SubCategory 1-2'
    },
    {
        seqNo: '04',
        name: '유용한 작업증명서',
        content: 'Content for SubCategory 1-2'
    },
    ]
},
{
    name: '알레오 크레딧',
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
                <div class="content flex flex-column">
                    <div v-html="categories[activeCategory].subCategories[activeSubCategory].content"></div>
                </div>
            </div>
        </div>
    </div>
  </template>
  

  
<style scoped>
.dual-tab-view {
    display: flex;
    justify-content: space-between;
    width: 100%;
    color: #FFFFFF;
}

.left-panel {
    width: 30%;
}
.point {
    color: #057FFC
}
.point2 {
    color: rgb(8,43,81)
    
}
.category-tabs {
    display: flex;
    flex-direction: column;
    justify-content: start;
    margin-bottom: 20px;
    font-size: 45px;
}
.sub-category-tabs {
    display: flex;
    flex-direction: column;
    justify-content: start;
    margin-bottom: 20px;
    font-size: 23px;  
}
.category-tabs span, .sub-category-tabs span {
    padding: 10px;
    cursor: pointer;
    margin-right: 10px;
}

.right-panel {
    width: 58%;
}

.active-tab {
    color: #FFFFFF;
    border-bottom: 2px solid #000;
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
.content-wrapper {
    width: 704px;
    height: 100%;
}
.content {
    width: 100%;
    height: 100%;
    border-radius: 15px;
    background-color: rgba(28, 28, 28, 1);
    color: #FFFFFF;
    font-size: 20px;
    padding: 4rem;
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
    }

    .active-tab {
        color: #FFFFFF;
        border-bottom: 2px solid #000;
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
    .content-wrapper {
        width: 100%;
        height: 100%;
    }
    .content {
        width: 100%;
        height: 100%;
        border-radius: 15px;
        background-color: rgba(28, 28, 28, 1);
        color: #FFFFFF;
        font-size: 12px;
        padding: 2rem;
    }
}
</style>
  