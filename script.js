// ============================================
// FC东京 球队官网 - 交互逻辑
// ============================================

// 标签切换
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const targetTab = btn.dataset.tab;

        tabBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));

        btn.classList.add('active');
        document.getElementById(targetTab).classList.add('active');

        if (targetTab === 'squad') {
            renderPlayers('ALL');
        }
        if (targetTab === 'matches') {
            renderMatches();
        }
        if (targetTab === 'honors') {
            renderHonors();
        }
        if (targetTab === 'history') {
            renderHistory();
        }
    });
});

// ============================================
// 球员卡片渲染
// ============================================
function renderPlayers(filter) {
    const grid = document.getElementById('playerGrid');
    grid.innerHTML = '';

    const filtered = filter === 'ALL'
        ? playersData
        : playersData.filter(p => p.position === filter);

    filtered.forEach(player => {
        const card = document.createElement('div');
        card.className = 'player-card';
        card.dataset.playerId = player.id;

        const initial = player.name.charAt(0);
        const seasons = Object.keys(player.stats).sort().reverse();
        const latestStats = player.stats[seasons[0]] || { apps: 0, goals: 0, assists: 0 };

        card.innerHTML = `
            <div class="player-card-avatar">
                <div class="jersey-number">${player.number}</div>
                <img src="${player.image}" alt="${player.name}" class="player-img"
                     onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
                <div class="player-initial" style="display:none;">${initial}</div>
                <div class="position-badge">${player.position}</div>
            </div>
            <div class="player-card-info">
                <h4>${player.name}</h4>
                <p class="name-en">${player.nameEn}</p>
                <div class="player-card-stats">
                    <div class="player-card-stat">
                        <div class="stat-num">${latestStats.apps}</div>
                        <div class="stat-text">出场</div>
                    </div>
                    <div class="player-card-stat">
                        <div class="stat-num">${latestStats.goals}</div>
                        <div class="stat-text">进球</div>
                    </div>
                    <div class="player-card-stat">
                        <div class="stat-num">${latestStats.assists}</div>
                        <div class="stat-text">助攻</div>
                    </div>
                </div>
            </div>
        `;

        card.addEventListener('click', () => showPlayerDetail(player));
        grid.appendChild(card);
    });
}

// ============================================
// 位置筛选
// ============================================
const filterBtns = document.querySelectorAll('.filter-btn');
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderPlayers(btn.dataset.position);
    });
});

// ============================================
// 球员详情弹窗
// ============================================
const modalOverlay = document.getElementById('playerModal');
const modalContent = document.getElementById('modalContent');
const modalClose = document.getElementById('modalClose');

function showPlayerDetail(player) {
    const initial = player.name.charAt(0);
    const seasons = Object.keys(player.stats).sort().reverse();
    const isGK = player.position === 'GK';

    let statsRows = `
        <tr>
            <th>赛季</th>
            <th>效力球队</th>
            <th>出场</th>
            <th>进球</th>
            <th>助攻</th>
            <th>G+A</th>
            ${isGK ? '<th>零封</th><th>失球</th>' : ''}
            <th>分钟</th>
        </tr>
    `;

    seasons.forEach(season => {
        const s = player.stats[season];
        const apps = s.apps || 0;
        const goals = s.goals || 0;
        const assists = s.assists || 0;
        statsRows += `
            <tr>
                <td><strong>${season}</strong></td>
                <td>${s.team || 'FC東京'}</td>
                <td class="stat-highlight">${apps}</td>
                <td class="stat-highlight">${goals}</td>
                <td class="stat-highlight">${assists}</td>
                <td>${goals + assists}</td>
                ${isGK ? `<td class="stat-highlight">${s.cleanSheets || 0}</td><td>${s.goalsConceded || 0}</td>` : ''}
                <td>${s.minutes || 0}</td>
            </tr>
        `;
    });

    modalContent.innerHTML = `
        <div class="modal-player-header">
            <div class="jersey-number-large">${player.number}</div>
            <div class="modal-player-avatar">
                <img src="${player.image}" alt="${player.name}" class="modal-player-img"
                     onerror="this.style.display='none';this.nextElementSibling.style.display='block';">
                <span class="modal-player-initial" style="display:none;">${initial}</span>
            </div>
            <h3>${player.name}</h3>
            <p class="modal-name-en">${player.nameEn}</p>
            <div class="modal-player-meta">
                <span>位置：${player.position}</span>
                <span>年龄：${player.age}岁</span>
                <span>国籍：${player.nationality}</span>
                <span>身高/体重：${player.height} / ${player.weight}</span>
            </div>
        </div>
        <div class="modal-player-body">
            <div class="modal-bio">
                <h4>球员简介</h4>
                <p>${player.bio}</p>
            </div>
            <div class="modal-stats-section">
                <h4>赛季数据</h4>
                <table class="stats-table">
                    ${statsRows}
                </table>
            </div>
        </div>
    `;

    modalOverlay.classList.add('show');
    document.body.style.overflow = 'hidden';
}

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

function closeModal() {
    modalOverlay.classList.remove('show');
    document.body.style.overflow = '';
}

// ============================================
// 球队荣誉渲染
// ============================================
function renderHonors() {
    const list = document.getElementById('honorsList');
    if (list.children.length > 0) return;

    const icons = {
        'trophy': '🏆',
        'crown': '👑',
        'medal': '🏅',
        'shield': '🛡️',
        'star': '⭐',
        'graduation-cap': '🎓'
    };

    honorsData.forEach(honor => {
        const card = document.createElement('div');
        card.className = 'honor-card' + (honor.titles === 0 ? ' no-title' : '');

        const yearBadges = honor.years.map(y =>
            `<span class="honor-year-badge">${y}</span>`
        ).join('');

        const detailsText = honor.details.map(d =>
            `<strong>${d.year}：</strong>${d.description}`
        ).join('<br>');

        const titleText = honor.titles > 0
            ? `${honor.titles}次夺冠`
            : honor.note
                ? `${honor.note}`
                : '参赛记录';

        card.innerHTML = `
            <div class="honor-icon-large">${icons[honor.icon] || '🏆'}</div>
            <div class="honor-info">
                <h4>${honor.competition}</h4>
                <p>${detailsText}</p>
            </div>
            <div class="honor-years">
                ${yearBadges}
                <span class="honor-year-badge" style="background:${honor.titles > 0 ? 'var(--fc-red)' : 'var(--fc-gray-mid)'}">${titleText}</span>
            </div>
        `;

        list.appendChild(card);
    });
}

// ============================================
// 历史战绩渲染
// ============================================
function renderHistory() {
    const list = document.getElementById('historyList');
    list.innerHTML = '';

    historyData.forEach(item => {
        const card = document.createElement('div');
        card.className = 'history-card' + (item.highlight ? ' has-highlight' : '');

        const isJ2 = item.league === 'J2';
        const isCentennial = item.league === 'J1百年构想';
        const leftClass = isJ2 ? 'j2' : isCentennial ? 'centennial' : '';
        const gdClass = item.gd > 0 ? 'positive' : item.gd < 0 ? 'negative' : '';
        const gdText = item.gd > 0 ? `+${item.gd}` : `${item.gd}`;

        card.innerHTML = `
            <div class="history-card-left ${leftClass}">
                <div class="history-season">${item.season}</div>
                <div class="history-league">${item.league}</div>
            </div>
            <div class="history-card-rank ${leftClass}">
                <div class="history-rank-num">${item.pos}</div>
                <div class="history-rank-label">排名</div>
            </div>
            <div class="history-card-stats">
                <div class="history-stat">
                    <div class="history-stat-num">${item.mp}</div>
                    <div class="history-stat-label">场次</div>
                </div>
                <div class="history-stat">
                    <div class="history-stat-num win">${item.w}</div>
                    <div class="history-stat-label">胜</div>
                </div>
                <div class="history-stat">
                    <div class="history-stat-num draw">${item.d}</div>
                    <div class="history-stat-label">平</div>
                </div>
                <div class="history-stat">
                    <div class="history-stat-num lose">${item.l}</div>
                    <div class="history-stat-label">负</div>
                </div>
                <div class="history-stat">
                    <div class="history-stat-num">${item.gf}</div>
                    <div class="history-stat-label">进球</div>
                </div>
                <div class="history-stat">
                    <div class="history-stat-num">${item.ga}</div>
                    <div class="history-stat-label">失球</div>
                </div>
                <div class="history-stat">
                    <div class="history-stat-num ${gdClass}">${gdText}</div>
                    <div class="history-stat-label">净胜球</div>
                </div>
                <div class="history-stat points">
                    <div class="history-stat-num">${item.pts}</div>
                    <div class="history-stat-label">积分</div>
                </div>
            </div>
            ${item.highlight ? `<div class="history-highlight">${item.highlight}</div>` : ''}
        `;

        list.appendChild(card);
    });
}

// ============================================
// 比赛日志渲染
// ============================================
function renderMatches() {
    const list = document.getElementById('matchesList');
    list.innerHTML = '';

    matchesData.forEach((match, index) => {
        const card = document.createElement('div');
        card.className = 'match-card';

        const outcomeClass = match.outcome === 'win' ? 'match-win' : match.outcome === 'draw' ? 'match-draw' : 'match-lose';
        const outcomeText = match.outcome === 'win' ? '胜' : match.outcome === 'draw' ? '平' : '负';

        const summary = match.summary || '';

        card.innerHTML = `
            <div class="match-card-header">
                <div class="match-round">${match.round}</div>
                <div class="match-date">${match.date}</div>
                <div class="match-result ${outcomeClass}">${match.result}</div>
                <div class="match-outcome ${outcomeClass}">${outcomeText}</div>
            </div>
            <div class="match-opponent">${match.opponent}</div>
            <div class="match-image-wrap">
                <img src="${match.image}" alt="${match.round} ${match.opponent}" class="match-img"
                     onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
                <div class="match-img-placeholder" style="display:none;">暂无图片</div>
            </div>
            ${summary ? `
            <div class="match-summary-section">
                <div class="match-summary-label">赛后总结</div>
                <div class="match-summary-text">${summary}</div>
            </div>
            ` : ''}
        `;

        list.appendChild(card);
    });
}

// ============================================
// 初始化
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    renderPlayers('ALL');
});
