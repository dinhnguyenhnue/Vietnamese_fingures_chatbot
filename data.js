const danhNhanData = [
  {
    id: "chu-van-an",
    name: "Chu Văn An",
    sidebarIcon: "school",
    title: "Vạn Thế Sư Biểu",
    quote: '"Ta chưa từng thấy người nào không có phẩm hạnh mà có thể dạy bảo người khác thành người có đức."',
    bioTitle: "Tiểu sử Cuộc đời",
    bio: "Chu Văn An (1292 – 1370), tên thật là Chu An, tự là Linh Triệt, hiệu là Tiều Ẩn. Ông là một nhà giáo, thầy thuốc, đại quan dưới triều Trần. Được tôn vinh là \"Vạn thế sư biểu\" (Người thầy mẫu mực của muôn đời), ông nổi tiếng với sự cương trực, thanh liêm và học vấn uyên thâm.",
    lifespan: "1292 - 1370",
    hometown: "Thanh Trì, Thăng Long",
    image: "https://drive.google.com/thumbnail?id=1axI1iFE8R_iAH10pu34W5PtqOJb7GIxt&sz=w1000",
    imageCaptionTitle: "Chân dung",
    imageTitle: "Vạn Thế Sư Biểu",
    imageDesc: "Ảnh chân dung danh nhân Chu Văn An.",
    achievements: [
      { title: "Thất trảm sớ", desc: "Tờ sớ đòi chém 7 nịnh thần, thể hiện khí tiết lẫm liệt của người trí thức trước cường quyền." },
      { title: "Trường tư thục Huỳnh Cung", desc: "Mở trường dạy học cho dân thường, không phân biệt giàu nghèo, đặt nền móng cho giáo dục tư nhân." },
      { title: "Tiều Ẩn Thi Tập", desc: "Để lại những áng thơ thanh cao, phản ánh tâm hồn yêu thiên nhiên và nỗi lòng với dân nước." }
    ],
    faqs: [
      "Vì sao ông được gọi là \"Vạn thế sư biểu\"?",
      "Thất trảm sớ gồm những ai?",
      "Chu Văn An đã dạy những vị vua nào?"
    ],
    title: "Vạn thế sư biểu",
    summary: "Người thầy vĩ đại của muôn đời, biểu tượng của nền giáo dục Việt Nam.",
    metadata: [
        { label: "Họ và tên", value: "Chu Văn An" },
        { label: "Tự", value: "Linh Triệt" },
        { label: "Hiệu", value: "Tiều Ẩn, Khang Tiết tiên sinh" },
        { label: "Thụy", value: "Văn Trinh" },
        { label: "Sinh - Mất", value: "1292 – 1370" },
        { label: "Quê quán", value: "Thanh Đàm (nay thuộc Thanh Trì, Hà Nội)" },
        { label: "UNESCO", value: "Danh nhân văn hóa thế giới (2019)" }
    ],
    avatar: "https://drive.google.com/thumbnail?id=1axI1iFE8R_iAH10pu34W5PtqOJb7GIxt&sz=w1000",
    headerAvatar: "https://drive.google.com/thumbnail?id=1axI1iFE8R_iAH10pu34W5PtqOJb7GIxt&sz=w1000",
    chatRole: "Chuyên gia lịch sử & văn hóa",
    gemLink: "https://gemini.google.com/gem/1XsVPSGgEq1dx9XuObJ9L53M8REIh1tOQ?usp=sharing",
    initialAIChat: `
      <h3 class="font-headline text-lg text-primary mb-3">Ngôi trường Huỳnh Cung – Nơi khởi nguồn đạo học</h3>
      <div class="space-y-4 text-on-surface/90 text-[15px] leading-relaxed font-body">
        <p>Chào bạn, rất hân hạnh được chia sẻ về một dấu ấn quan trọng trong sự nghiệp giáo dục của Vạn thế sư biểu Chu Văn An.</p>
        <p>Trường Huỳnh Cung được thầy Chu Văn An lập nên tại quê nhà (làng Quang Liệt, nay là Thanh Trì, Hà Nội) sau khi ông đỗ Thái học sinh nhưng từ chối ra làm quan ngay. Đây là một ngôi trường tư thục đặc biệt trong lịch sử phong kiến Việt Nam vì:</p>
        <ul class="list-none space-y-2 pl-2 border-l-2 border-primary-container">
          <li><strong class="text-primary font-semibold">Tinh thần hiếu học:</strong> Trường thu hút hàng nghìn học trò từ khắp nơi tìm đến, không phân biệt giàu nghèo, cốt ở cái tâm cầu đạo.</li>
          <li><strong class="text-primary font-semibold">Nghiêm túc trong đào tạo:</strong> Học trò của thầy Chu Văn An tại Huỳnh Cung nổi tiếng là những người tài đức vẹn toàn. Những người thành đạt như Phạm Sư Mạnh, Lê Quát khi về thăm thầy vẫn giữ lễ tiết rất mực kính cẩn.</li>
          <li><strong class="text-primary font-semibold">Tôn chỉ giáo dục:</strong> Thầy không chỉ dạy chữ mà còn dạy làm người, lấy "lễ" làm đầu, rèn luyện nhân cách và khí tiết của người quân tử.</li>
        </ul>
        <p>Ngày nay, di tích này vẫn được coi là biểu tượng cho truyền thống tôn sư trọng đạo của dân tộc ta. Bạn có muốn tìm hiểu thêm về các môn học mà thầy Chu Văn An đã giảng dạy tại đây không?</p>
      </div>`,
    suggestedQuestions: [
      { icon: "school", text: "Vì sao ông được gọi là \"Vạn thế sư biểu\"?", answer: "Người đời tôn vinh ta là \"Vạn thế sư biểu\" (người thầy chuẩn mực của muôn đời) bởi trọn đời ta cống hiến cho sự nghiệp giáo dục, không màng danh lợi, dũng cảm dâng Thất trảm sớ khuyên can vua, và đào tạo nên nhiều nhân tài giữ rường cột cho quốc gia như Phạm Sư Mạnh, Lê Quát." },
      { icon: "gavel", text: "Thất trảm sớ gồm những ai?", answer: "Tuy sử cũ không ghi lại danh tính cụ thể của 7 tên nịnh thần này, nhưng đó đều là những kẻ lạm quyền, bất tài, khiến triều đình nhiễu nhương, bá tánh lầm than. Ta dâng sớ yêu cầu chém đầu chúng để giữ vững ngai vàng vua Trần và an lòng dân." },
      { icon: "diamond", text: "Chu Văn An đã dạy những vị vua nào?", answer: "Lúc sinh thời làm Tư nghiệp Quốc Tử Giám, ta từng trực tiếp dạy dỗ học trò là Thái tử Trần Vượng, tức vua Trần Hiến Tông sau này." },
      { icon: "explore", text: "Thầy dạy những môn học gì?", answer: "Ta chủ yếu giảng dạy Tứ thư, Ngũ kinh của Nho giáo, đồng thời nhấn mạnh vào chữ 'Lý' và chữ 'Tâm'. Học trò phải rèn luyện đạo đức, giữ vững khí tiết quân tử trước khi mong ra giúp đời." },
      { icon: "history_edu", text: "\"Thất trảm sớ\" là gì?", answer: "Đó là bản tấu ta dâng lên vua Trần Dụ Tông vào năm 1369, yêu cầu chém đầu 7 tên nịnh thần lũng đoạn triều đình. Rất tiếc vua không nghe, ta liền cởi áo trả triều phục, lui về núi Phượng Hoàng ở ẩn." },
      { icon: "location_on", text: "Vị trí trường Huỳnh Cung hiện nay?", answer: "Trường Huỳnh Cung nằm trên gò miếu Cung, thuộc làng Quang Liệt, nay là thôn Huỳnh Cung, xã Tam Hiệp, huyện Thanh Trì, thành phố Hà Nội." }
    ],
    resources: [
      {
        categoryTitle: "Khối tư liệu Video",
        categoryDesc: "Dùng cho phần giới thiệu bối cảnh, tiểu sử và nơi thờ tự",
        items: [
          {
            title: "TÓM TẮT LỊCH SỬ NHÀ TRẦN PHẦN 21 NEW 2022",
            desc: "Dùng để minh họa bối cảnh lịch sử, xã hội thời nhà Trần - thời đại mà Chu Văn An sinh sống và làm việc",
            link: "https://www.youtube.com/results?search_query=T%C3%93M+T%E1%BA%AET+L%E1%BB%8ACH+S%E1%BB%AC+NH%C3%80+TR%E1%BA%A6N+PH%E1%BA%A6N+21+NEW+2022",
            type: "video"
          },
          {
            title: "Video tư liệu về thầy Chu Văn An",
            desc: "Cung cấp các thước phim tư liệu tổng quan về cuộc đời, các giai đoạn phát triển và sự nghiệp của danh nhân",
            link: "https://www.youtube.com/results?search_query=Video+t%C6%B0+li%E1%BB%87u+v%E1%BB%81+th%E1%BA%A7y+Chu+V%C4%83n+An",
            type: "video"
          },
          {
            title: "Văn Miếu Quốc Tử Giám",
            desc: "Video minh họa trực quan không gian Văn Miếu Quốc Tử Giám, nơi ông được thờ phụng",
            link: "https://www.youtube.com/results?search_query=V%C4%83n+Mi%E1%BA%BFu+Qu%E1%BB%91c+T%E1%BB%AD+Gi%C3%A1m",
            type: "video"
          }
        ]
      },
      {
        categoryTitle: "Khối hình ảnh Tiểu sử, Sự nghiệp và Đóng góp",
        categoryDesc: "Dùng cho trang chủ hoặc phần chi tiết cuộc đời",
        items: [
          {
            title: "Sơ đồ tư duy",
            desc: "Tóm tắt trực quan 3 giai đoạn cuộc đời và các hoạt động tiêu biểu của ông",
            link: "https://drive.google.com/file/d/1p9eJ6eg5jfY-u6PZCyw0kWbuR4igZQhe/view?usp=drive_link",
            thumbnail: "https://drive.google.com/thumbnail?id=1p9eJ6eg5jfY-u6PZCyw0kWbuR4igZQhe&sz=w1000",
            type: "image"
          },
          {
            title: "Mở trường dạy học - Huỳnh Cung",
            desc: "Minh họa cho đóng góp mở trường dân lập và phát triển giáo dục nước nhà",
            link: "https://drive.google.com/file/d/1GtwazRrdzR9yiruEayKC33ibrYRanGFq/view?usp=drive_link",
            thumbnail: "https://drive.google.com/thumbnail?id=1GtwazRrdzR9yiruEayKC33ibrYRanGFq&sz=w1000",
            type: "image"
          },
          {
            title: "Mộc bản Ngự chế Việt sử...",
            desc: "Minh chứng lịch sử: Vua Trần Minh Tông cử ông làm Tư nghiệp Quốc Tử Giám",
            link: "https://drive.google.com/file/d/15xncc3i7NtQo_B8KOOotfXG4QRJocU03/view?usp=drive_link",
            thumbnail: "https://drive.google.com/thumbnail?id=15xncc3i7NtQo_B8KOOotfXG4QRJocU03&sz=w1000",
            type: "image"
          },
          {
            title: "Y học, Văn học, Tư tưởng",
            desc: "Phần nói về tác phẩm thi ca, y học hoặc bộ sách 'Tứ thư thuyết ước'",
            link: "https://drive.google.com/file/d/1hidEACpzPaqNrcOlPMdMaymRZvPF-QQi/view?usp=drive_link",
            thumbnail: "https://drive.google.com/thumbnail?id=1hidEACpzPaqNrcOlPMdMaymRZvPF-QQi&sz=w1000",
            type: "image"
          }
        ]
      },
      {
        categoryTitle: "Khối hình ảnh Đánh giá và Vinh danh",
        categoryDesc: "Dùng cho phần Tôn vinh, UNESCO vinh danh",
        items: [
          {
            title: "Ảnh tượng Chu Văn An (H17)",
            desc: "Tượng danh nhân",
            link: "https://drive.google.com/file/d/1f3TrS4l9uKvYXCBZ2sIXCSVuLVyOdA7D/view?usp=sharing",
            thumbnail: "https://drive.google.com/thumbnail?id=1f3TrS4l9uKvYXCBZ2sIXCSVuLVyOdA7D&sz=w1000",
            type: "image"
          },
          {
            title: "Sự kiện UNESCO vinh danh",
            desc: "Minh họa quá trình vinh danh Chu Văn An là Danh nhân văn hóa thế giới",
            link: "https://drive.google.com/file/d/1MtNtGHGjWW--Vmz2_yHXSFPI0AuW0hqt/view?usp=drive_link",
            thumbnail: "https://drive.google.com/thumbnail?id=1MtNtGHGjWW--Vmz2_yHXSFPI0AuW0hqt&sz=w1000",
            type: "image"
          },
          {
            title: "Hội thảo khoa học (H4)",
            desc: "Tư liệu sự kiện 'Con người và sự nghiệp danh nhân Chu Văn An'",
            link: "https://drive.google.com/drive/u/0/folders/17j7hKZVGgulIcdGhmA6iDi83Zsu5Iuz9",
            type: "folder"
          },
          {
            title: "Đại Việt sử ký toàn thư",
            desc: "Ghi chép ca ngợi tính cương nghị, thẳng thắn của ông",
            link: "https://drive.google.com/file/d/1L01WzN0lvbr93vjgeIAcgNZvFaMF73xX/view?usp=drive_link",
            thumbnail: "https://drive.google.com/thumbnail?id=1L01WzN0lvbr93vjgeIAcgNZvFaMF73xX&sz=w1000",
            type: "image"
          },
          {
            title: "Nhà sử học Ngô Sỹ Liên",
            desc: "Lời khen, ca ngợi đại đức của Chu Văn An",
            link: "https://drive.google.com/file/d/1yEcv27N5IXyg07SKw7YRVVYyt1R5vVJm/view?usp=drive_link",
            thumbnail: "https://drive.google.com/thumbnail?id=1yEcv27N5IXyg07SKw7YRVVYyt1R5vVJm&sz=w1000",
            type: "image"
          },
          {
            title: "Phan Huy Chú ca ngợi",
            desc: "'Học nghiệp thuần túy, tiết tháo cao thượng'",
            link: "https://drive.google.com/file/d/1q_qz_IrABvmZ-nCX2Vokgp38dtZcLqeL/view?usp=drive_link",
            thumbnail: "https://drive.google.com/thumbnail?id=1q_qz_IrABvmZ-nCX2Vokgp38dtZcLqeL&sz=w1000",
            type: "image"
          },
          {
            title: "Đại diện UNESCO chia sẻ",
            desc: "Trích bài nói chuyện của ông Michael Croft về di sản công lý và giáo dục",
            link: "https://drive.google.com/file/d/1WyhC4wV5Ool0VnNXKC7zIySvySLNyTA-/view?usp=drive_link",
            thumbnail: "https://drive.google.com/thumbnail?id=1WyhC4wV5Ool0VnNXKC7zIySvySLNyTA-&sz=w1000",
            type: "image"
          }
        ]
      },
      {
        categoryTitle: "Khối hình ảnh Di sản, Di tích và Tưởng niệm",
        categoryDesc: "Dùng cho trang/thư viện Di sản",
        items: [
          {
            title: "Đền thờ tại Hải Dương (H6)",
            link: "https://drive.google.com/file/d/1CqEQgSzBSnWGpR2mT4nJ36Lq2WTbB96K/view?usp=sharing",
            thumbnail: "https://drive.google.com/thumbnail?id=1CqEQgSzBSnWGpR2mT4nJ36Lq2WTbB96K&sz=w1000",
            type: "image"
          },
          {
            title: "Hoạt động sáng tác (H7)",
            link: "https://drive.google.com/file/d/17RsNRX5F5lLqBBAAldAkq8F7MiBg8QfQ/view?usp=sharing",
            thumbnail: "https://drive.google.com/thumbnail?id=17RsNRX5F5lLqBBAAldAkq8F7MiBg8QfQ&sz=w1000",
            type: "image"
          },
          {
            title: "Triển lãm Thượng tường Sơn Đẩu (H8)",
            link: "https://drive.google.com/file/d/1xyhBuDTM0VmoN7n6EwDDFN0vPyooSXtH/view?usp=sharing",
            thumbnail: "https://drive.google.com/thumbnail?id=1xyhBuDTM0VmoN7n6EwDDFN0vPyooSXtH&sz=w1000",
            type: "image"
          },
          {
            title: "Lăng mộ Chu Văn An (H9)",
            link: "https://drive.google.com/file/d/1YJI0h_q5DP5bdIK3jhGh9X9jMjuS-DGk/view?usp=sharing",
            thumbnail: "https://drive.google.com/thumbnail?id=1YJI0h_q5DP5bdIK3jhGh9X9jMjuS-DGk&sz=w1000",
            type: "image"
          },
          {
            title: "Lễ dâng hương (H11)",
            desc: "Giáo viên & Học sinh",
            link: "https://drive.google.com/file/d/16uBxnSqxTsodxn8XLaxH62xwYSXlxTcg/view?usp=sharing",
            thumbnail: "https://drive.google.com/thumbnail?id=16uBxnSqxTsodxn8XLaxH62xwYSXlxTcg&sz=w1000",
            type: "image"
          },
          {
            title: "Toàn cảnh gian thờ (H12)",
            link: "https://drive.google.com/file/d/1Yn0usHJBPCMpe-a_WXAf5VkUSGAKsB85/view?usp=sharing",
            thumbnail: "https://drive.google.com/thumbnail?id=1Yn0usHJBPCMpe-a_WXAf5VkUSGAKsB85&sz=w1000",
            type: "image"
          },
          {
            title: "Trường Đại Học Chu Văn An (H13)",
            link: "https://drive.google.com/file/d/1DsUn_5DTADLrJ445V59r0vKnFmWsRE-5/view?usp=sharing",
            thumbnail: "https://drive.google.com/thumbnail?id=1DsUn_5DTADLrJ445V59r0vKnFmWsRE-5&sz=w1000",
            type: "image"
          },
          {
            title: "Trao giải thi sáng tác (H14)",
            link: "https://drive.google.com/file/d/161RMJ8c8y23nykC97g19ZDLtbaUEqamf/view?usp=sharing",
            thumbnail: "https://drive.google.com/thumbnail?id=161RMJ8c8y23nykC97g19ZDLtbaUEqamf&sz=w1000",
            type: "image"
          },
          {
            title: "Sách viết về danh nhân (H15)",
            link: "https://drive.google.com/file/d/1x2vUgzyfD6AAYuxKjsDDK2GLx0PGLpU6/view?usp=sharing",
            thumbnail: "https://drive.google.com/thumbnail?id=1x2vUgzyfD6AAYuxKjsDDK2GLx0PGLpU6&sz=w1000",
            type: "image"
          },
          {
            title: "Khán thờ sơn son thếp vàng & tượng thờ (H16)",
            desc: "Tại đền Thanh Liệt",
            link: "https://drive.google.com/file/d/1W5nl_TAPvvh9ny5GKa2-pB48sCG8eicA/view?usp=sharing",
            thumbnail: "https://drive.google.com/thumbnail?id=1W5nl_TAPvvh9ny5GKa2-pB48sCG8eicA&sz=w1000",
            type: "image"
          }
        ]
      }
    ],
    learningModules: [
      {
        id: "s2",
        type: "text_media",
        title: "2. Bối cảnh thời đại",
        html: "<p>Chu Văn An sống vào cuối thời nhà Trần – một giai đoạn có nhiều biến động về chính trị, xã hội và giáo dục ở Đại Việt: triều chính rốn ren, kinh tế - xã hội khó khăn. Cũng trong thời kỳ này, Nho giáo phát triển, đóng vai trò quan trọng, tạo điều kiện cho các trí thức Nho học tham gia vào việc triều chính, ảnh hưởng sâu sắc đến tư tưởng và hành động của ông.</p>",
        media: { type: "video", url: "https://youtu.be/v064-uFUAcQ?si=8A7XR6dZe5Y4VcyI" }
      },
      {
        id: "s3",
        type: "text_media",
        title: "3. Cuộc đời",
        html: "<p>Chu Văn An (1292 – 1370), tên hiệu là Tiều Ẩn, tên chữ là Linh Triệt, người làng Quang Liệt (nay là thôn Văn), xã Thanh Liệt, huyện Thanh Trì, Hà Nội. Cuộc đời và sự nghiệp của Chu Văn An để lại cho chúng ta một nhân cách lớn của một nhà trí thức lớn. Sức mạnh tinh thần phong phú giúp Chu Văn An sống một cuộc đời đầy ý nghĩa, tự tại, tự tôn trong bối cảnh xã hội rối ren đương thời. Cho đến nay, Chu Văn An vẫn được coi là một trong những vị Tư nghiệp đầu tiên của Quốc Tử Giám, có nhiều dấu ấn với Văn Miếu Quốc Tử Giám và nền Quốc học nước nhà thế kỷ XIV.</p><p class='mt-3'>Theo Đại Việt sử ký toàn thư, Chu Văn An \"tính cương nghị, thẳng thắn, sửa mình trong sạch, không cầu lợi lộc\". Ông ở nhà đọc sách, học vấn tinh thông, nổi tiếng gần xa, \"học trò đầy cửa, thường có kẻ đỗ đại khoa\".</p><p class='mt-3'>Các học trò đến với lớp học không chỉ vì biết thầy Chu Văn An tinh thông Nho học mà còn vì nể phục, trân trọng khí chất thanh cao, tấm lòng trung hiếu với dân, với nước không màng danh vọng. Học trò của thầy có nhiều người đã đỗ đạt và làm quan trong triều đình được sử sách nhắc tới như Phạm Sư Mãnh, Lê Quát.</p>",
        media: { type: "video", url: "https://youtu.be/JSsTk6ui0-M?si=x-fme0i15Uuuixh4" },
        task: "Xây dựng thẻ hồ sơ thông tin về danh nhân Chu Văn An với những tiêu chí cơ bản sau: Họ và tên, tự, nơi sinh, gia đình,…",
        taskUrl: "https://aseanmotbian.my.canva.site/taothedanhnhan"
      },
      {
        id: "s4",
        type: "text_media",
        title: "4. Sự nghiệp – hoạt động",
        html: "<p>Cuộc đời của Chu Văn An được chia làm 3 giai đoạn:</p><ul class='list-disc pl-5 mt-2 space-y-2'><li>Giai đoạn sau khi đỗ Thái học sinh (tương đương với Tiến sĩ), Chu Văn An không ra làm quan mà về Huỳnh Cung mở trường dạy học, thu hút được nhiều học trò.</li><li>Giai đoạn được vua Trần Minh Tông (1300-1357) mời ông ra làm tư nghiệp Quốc tử giám, dạy cho Thái tử Trần Vượng, tức là vua Trần Hiến Tông;</li><li>Giai đoạn thoái lui ở núi Phượng Hoàng (Chí Linh, Hải Dương): Theo Đại Việt sử ký toàn thư, sau khi dâng Thất trảm sớ nhưng không được vua trả lời, Chu Văn An rời kinh thành về vùng đất Chí Linh mở trường tiếp tục dạy học, lấy hiệu là Tiều Ẩn.</li></ul><p class='mt-3'>Sau khi Chu Văn An mất, ông được triều đình truy tặng tước Văn Trinh Công, được ban tên thụy là Khang Tiết và thờ ở Văn Miếu.</p>",
        media: { type: "image", src: "https://drive.google.com/thumbnail?id=1p9eJ6eg5jfY-u6PZCyw0kWbuR4igZQhe&sz=w1000", url: "https://drive.google.com/file/d/1p9eJ6eg5jfY-u6PZCyw0kWbuR4igZQhe/view?usp=drive_link" },
        task: "Vẽ sơ đồ tư duy tóm tắt sự nghiệp, hoạt động tiêu biểu của danh nhân Chu Văn An.",
        taskUrl: "https://aseanmotbian.my.canva.site/sodotuduy"
      },
      {
        id: "s5",
        type: "complex",
        title: "5. Đóng góp nổi bật danh nhân",
        blocks: [
          {
            type: "text_media",
            title: "Nhà giáo dục kiệt xuất",
            html: "<p>Mở trường dân lập dạy cho nhân dân, đào tạo ra nhiều nhân tài cho đất nước. Học trò đến học ở trường Huỳnh Cung khá đông với khoảng 3.000 người, có nhiều người đỗ đạt và làm quan to trong triều (như Nhập nội Hành khiển Lê Quát hay Phạm Sư Mạnh). Qua đó, thầy đã đóng vai trò quan trọng mở rộng cơ hội học tập cho bình dân, không chỉ dành cho quý tộc. Đây cũng là bước mở đầu cho sự đa dạng hình thức cơ sở giáo dục nước nhà.</p>",
            media: { type: "image", src: "https://drive.google.com/thumbnail?id=1GtwazRrdzR9yiruEayKC33ibrYRanGFq&sz=w1000", url: "https://drive.google.com/file/d/1GtwazRrdzR9yiruEayKC33ibrYRanGFq/view?usp=drive_link" }
          },
          {
            type: "text_media",
            title: "Giữ chức Tư nghiệp Quốc Tử Giám",
            html: "<p>Đến thời vua Trần Minh Tông, ông được mời ra làm Tư nghiệp Quốc Tử Giám, trông coi việc học của cả nước và trực tiếp giảng dạy cho hai Thái tử.</p>",
            media: { type: "image", src: "https://drive.google.com/thumbnail?id=15xncc3i7NtQo_B8KOOotfXG4QRJocU03&sz=w1000", url: "https://drive.google.com/file/d/15xncc3i7NtQo_B8KOOotfXG4QRJocU03/view?usp=drive_link", caption: "Mộc bản sách Ngự chế Việt sử tổng vịnh tập" }
          },
          {
            type: "text_media",
            title: "Đóng góp trong Văn học, Y học và Tư tưởng",
            html: "<p>Trong thời gian lui về ở ẩn, ông còn nghiên cứu y học, chữa bệnh cho dân và làm thơ. Ông là tác giả của “Tứ thư thuyết ước”, tóm tắt 4 bộ sách lớn làm giáo trình giảng dạy.</p>",
            media: { type: "image", src: "https://drive.google.com/thumbnail?id=1hidEACpzPaqNrcOlPMdMaymRZvPF-QQi&sz=w1000", url: "https://drive.google.com/file/d/1hidEACpzPaqNrcOlPMdMaymRZvPF-QQi/view?usp=drive_link" }
          },
          {
            type: "table_task",
            task: "Tìm hiểu về đóng góp của Chu Văn An trên các lĩnh vực bằng cách suy nghĩ hoàn thành bảng sau:",
            taskUrl: "https://aseanmotbian.my.canva.site/timhieudonggopdanhnhan",
            headers: ["Lĩnh vực", "Thành tựu", "Ý nghĩa"],
            rows: [
              ["Giáo dục", "...", "..."],
              ["Văn học", "...", "..."],
              ["Y học", "...", "..."],
              ["Tư tưởng", "...", "..."]
            ]
          }
        ]
      },
      {
        id: "s6",
        type: "text_media",
        title: "6. Lịch sử vinh danh",
        html: "<p>Sau khi Chu Văn An mất, ông được thờ ở Văn Miếu, xem ông ngang hàng với những bực Thánh hiền ngày xưa.</p><p class='mt-3'>Tháng 11/2019, Chu Văn An được Đại hội đồng UNESCO thế giới vinh danh là Danh nhân văn hóa thế giới và ra Nghị quyết cùng Việt Nam kỷ niệm 650 năm ngày mất vào năm 2020 để ghi nhận và tưởng nhớ những đóng góp của ông.</p>",
        media: { type: "image", src: "https://drive.google.com/thumbnail?id=1MtNtGHGjWW--Vmz2_yHXSFPI0AuW0hqt&sz=w1000", url: "https://drive.google.com/file/d/1MtNtGHGjWW--Vmz2_yHXSFPI0AuW0hqt/view?usp=drive_link" }
      },
      {
        id: "s7",
        type: "table_task",
        title: "7. Sự kiện biểu dương",
        headers: ["STT", "Tên Hội thảo", "Địa điểm", "Thời gian", "Cấp"],
        rows: [
          ["1", "Hội thảo khoa học Danh nhân Chu Văn An – Con người và Sự nghiệp", "Trung tâm VHKH Văn Miếu", "6/4/2018", "Quốc gia"]
        ],
        task: "Đóng vai là ban tổ chức, hãy lên kế hoạch cho một cuộc hội thảo khoa học về danh nhân Chu Văn An tại trường của bạn.",
        taskUrl: "https://aseanmotbian.my.canva.site/hoatdonghoctap"
      },
      {
        id: "s8",
        type: "complex",
        title: "8. Đánh giá về danh nhân",
        blocks: [
          {
            type: "text_media",
            title: "Đại Việt sử ký toàn thư",
            html: "<p>Chu Văn An \"tính cương nghị, thẳng thắn, sửa mình trong sạch, không cầu lợi lộc\".</p>",
            media: { type: "image", src: "https://drive.google.com/thumbnail?id=1L01WzN0lvbr93vjgeIAcgNZvFaMF73xX&sz=w1000", url: "https://drive.google.com/file/d/1L01WzN0lvbr93vjgeIAcgNZvFaMF73xX/view?usp=drive_link" }
          },
          {
            type: "text_media",
            title: "Nhà sử học Phan Huy Chú",
            html: "<p>\"Ông học nghiệp thuần túy, tiết tháo cao thượng... thực là một bậc nho tông ở nước Việt ta, tiếng tăm lưu truyền mãi được tôn kính, bực hiền nhân đều không ai bằng.\"</p>",
            media: { type: "image", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Phan_Huy_Chu_statue_at_Van_Mieu%2C_Hanoi.jpg/400px-Phan_Huy_Chu_statue_at_Van_Mieu%2C_Hanoi.jpg", url: "https://vi.wikipedia.org/wiki/Phan_Huy_Ch%C3%BA" }
          },
          {
            type: "text_media",
            title: "Sử học gia Ngô Sỹ Liên",
            html: "<p>\"Người chịu để tâm đến đại đức, suy nghĩ đến việc giúp Vua nêu đức tốt cho dân được nhờ ơn, Chu Văn An ở đời Trần có lẽ gần được như thế…\"</p>"
          },
          {
            type: "text_media",
            title: "Đại diện UNESCO",
            html: "<p>\"Chúng ta hãy coi giáo dục là một sự nghiệp suốt đời quan trọng và cần thiết cho sự phát triển bền vững của bản thân, của gia đình, của cộng đồng và của toàn dân tộc.\"</p>",
            media: { type: "image", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/UNESCO_logo.svg/512px-UNESCO_logo.svg.png", url: "https://vi.wikipedia.org/wiki/Danh_nh%C3%A2n_v%C4%83n_h%C3%B3a_th%E1%BA%BF_gi%E1%BB%9Bi" }
          }
        ]
      },
      {
        id: "s9",
        type: "text_media",
        title: "9. Di sản để lại",
        html: "<p>Người dân vùng quê Thanh Đàm thờ ông làm Thành hoàng và gọi là đức Thánh Chu. Nhiều nơi trong nước có di tích thờ phụng ông, như đền Thanh Liệt, Văn Điển, đền Phượng Sơn ở Chí Linh...</p><p class='mt-3'>Nhân dân Thủ đô cũng lấy tên ông để đặt tên cho một đường phố và một trường trung học lớn của Hà Nội. Trung tâm Văn Miếu thường xuyên tổ chức chuyên đề thiết kế, sáng tác về thầy.</p>",
        task: "Đóng vai là hướng dẫn viên du lịch, hãy giới thiệu về một di tích thờ phụng, tưởng niệm danh nhân Chu Văn An mà em biết.",
        taskUrl: "https://aseanmotbian.my.canva.site/emlamhuongdanviendulich"
      },
      {
        id: "s10",
        type: "game",
        title: "10. Trò chơi Canva",
        html: "<p>Tham gia trò chơi Canva tương tác chuyên đề về Chu Văn An.</p>",
        link: "#",
        status: "Sắp ra mắt",
        taskUrl: "https://aseanmotbian.my.canva.site/tracnghiem"
      },
      {
        id: "s11",
        type: "quiz",
        title: "11. Trắc nghiệm ĐÚNG/SAI",
        taskUrl: "https://aseanmotbian.my.canva.site/tracnghiemdungsai",
        questions: [
          { q: "Chu Văn An là một nhà Nho tiêu biểu của tầng lớp sĩ phu Việt Nam hơn 600 năm trước.", a: "Đ", text: "Câu 1 a" },
          { q: "Trong bối cảnh chính sự suy đồi, Chu Văn An đã dâng sớ xin nhà vua xử chém bảy tên nịnh thần.", a: "Đ", text: "Câu 1 b" },
          { q: "Sau khi dâng sớ, nhà vua lập tức chấp thuận và xử chém bảy tên nịnh thần.", a: "S", text: "Câu 1 c" },
          { q: "Khi đề nghị không được chấp nhận, Chu Văn An từ quan và trở về mở trường dạy học.", a: "Đ", text: "Câu 1 d" },
          { q: "Sau khi Chu Văn An qua đời, vua Trần Nghệ Tông đặt tên thụy cho ông là Văn Trinh.", a: "Đ", text: "Câu 2 a" },
          { q: "Chu Văn An được UNESCO vinh danh vào năm 2000.", a: "S", text: "Câu 3 a" },
          { q: "Chu Văn An đã nêu ra 4 quan điểm đạo đức nhà giáo gồm: cùng lý, chính tâm, tịch tà và cự bế.", a: "Đ", text: "Câu 4 a" }
        ]
      },
      {
        id: "s12",
        type: "integration",
        title: "12. Tích hợp Liên môn",
        subjects: [
          {
            name: "Lịch sử 5 - Triều Trần",
            html: "<p>Nhà Trần được thành lập năm 1226. Dưới thời nhà Trần, giáo dục khoa cử tiếp tục được quan tâm. Nhà nước mở rộng trường học và chọn được nhiều nhân tài, trong đó có Chu Văn An.</p>",
            task: "Học trò của Chu Văn An có người làm quan to, nhưng về thăm thầy vẫn giữ lễ. Điều này dạy ta bài học gì về 'Tôn sư trọng đạo'?"
          },
          {
            name: "GDCD 7 - Bảo tồn di sản văn hóa",
            html: "<p>Văn Miếu - Quốc Tử Giám là công trình cổ xưa dạy học và thờ kính Khổng Tử, hiền tài Nho học. Tượng đồng thầy Chu Văn An được đặt ở vị trí trung tâm tại Nhà Thái Học.</p>",
            task: "Kể tên một số giải pháp nhằm bảo tồn di sản văn hóa như Văn Miếu Quốc Tử Giám."
          }
        ]
      }
    ]
  },
  {
    id: "nguyen-trai",
    name: "Nguyễn Trãi",
    sidebarIcon: "history_edu",
    title: "Mưu phạt tâm công",
    quote: '"Việc nhân nghĩa cốt ở yên dân / Quân điếu phạt trước lo trừ bạo."',
    bioTitle: "Tiểu sử Anh hùng",
    bio: "Nguyễn Trãi (1380–1442), hiệu Ức Trai, là đại công thần khai quốc nhà Lê sơ. Ông là nhà quân sự, chính trị, ngoại giao và nhà văn hóa kiệt xuất của dân tộc. Tư tưởng \"nhân nghĩa\" và chiến lược \"đánh vào lòng người\" của ông đã góp phần quyết định vào thắng lợi của cuộc khởi nghĩa Lam Sơn, đánh đuổi giặc Minh, giành lại độc lập cho Tổ quốc.",
    lifespan: "1380 - 1442",
    hometown: "Nhị Khê, Thường Tín",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c6/Nguyen_Trai.jpg",
    imageCaptionTitle: "Tầm vóc vĩ đại",
    imageTitle: "Bình Ngô Đại Cáo",
    imageDesc: "Áng thiên cổ hùng văn tuyên bố nền độc lập tự chủ của Đại Việt.",
    achievements: [
      { title: "Bình Ngô Sách", desc: "Dâng kế sách vạch ra chiến lược đánh giặc cứu nước lấy nhân nghĩa làm gốc." },
      { title: "Bình Ngô Đại Cáo", desc: "Soạn thảo tác phẩm vĩ đại, được xem là bản Tuyên ngôn Độc lập lần thứ 2 của nước ta." },
      { title: "Di sản văn hóa", desc: "Để lại di sản đồ sộ (Quốc âm thi tập, Ức Trai thi tập). Được UNESCO vinh danh năm 1980." }
    ],
    faqs: [
      "Tại sao Nguyễn Trãi lại chọn chủ trương 'Mưu phạt tâm công'?",
      "Hoàn cảnh nào khiến ngài viết Bình Ngô đại cáo?",
      "Quan niệm của ông về 'Nhân Nghĩa' là gì?"
    ],
    chatAvatar: "https://upload.wikimedia.org/wikipedia/commons/c/c6/Nguyen_Trai.jpg",
    headerAvatar: "https://upload.wikimedia.org/wikipedia/commons/c/c6/Nguyen_Trai.jpg",
    chatRole: "Anh hùng dân tộc & Nhà văn hóa",
    gemLink: "https://gemini.google.com/gem/1jWcatr4yyM_6e3jG7cTvUzoWs10A3I9K?usp=sharing",
    initialAIChat: `
      <h3 class="font-headline text-lg text-primary mb-3">Tư Tưởng Nhân Nghĩa Thời Loạn</h3>
      <div class="space-y-4 text-on-surface/90 text-[15px] leading-relaxed font-body">
        <p>Chào bạn, ta là Nguyễn Trãi, hay còn gọi là Ức Trai. Ta đã chứng kiến cảnh binh đao khói lửa, cả một đời này mong sao cho dân chúng được an cư lạc nghiệp, thái bình thịnh trị.</p>
        <p>Để đánh giặc cường minh, ta chọn 'Mưu phạt tâm công' (đánh vào lòng người) thay vì chỉ dùng đao gươm tương sát. Vạn vật trên đời đều bị khuất phục bởi lòng nhân từ, chứ không phải gươm giáo vô tình.</p>
        <p>Bạn mong muốn nghe ta kể về áng thiên cổ hùng văn Bình Ngô Đại Cáo hay cảnh sắc thanh bình tựa thiền môn nơi Côn Sơn thanh tịnh?</p>
      </div>`,
    suggestedQuestions: [
      { icon: "psychology", text: "Tại sao Nguyễn Trãi lại chọn chủ trương 'Mưu phạt tâm công'?", answer: "Ta chọn sách lược này vì đánh thành là hạ sách, đánh vào lòng người mới là thượng sách. Nếu dùng binh đao thì trăm họ lầm than, còn thức tỉnh kẻ thù bằng lý lẽ nhân nghĩa thì địch sẽ tự cởi giáp quy hàng, bớt đổ máu mà vẫn giành được thái bình." },
      { icon: "book", text: "Hoàn cảnh nào khiến ngài viết Bình Ngô đại cáo?", answer: "Sau khi vương triều Minh chấp nhận rút quân cởi giáp, ta phụng mệnh Lê Lợi thảo bản đại cáo này vào đầu năm 1428 để bá cáo với toàn thiên hạ rằng nước Việt ta đã giành lại độc lập, non sông thu về một mối." },
      { icon: "diversity_1", text: "Quan niệm của ông về 'Nhân Nghĩa' là gì?", answer: "Với ta, phàm việc nhân nghĩa trước tiên phải là yên dân. Kẻ làm tướng, làm quan phải lo cho dân được bình an, ấm no; còn việc dấy binh trừng phạt cũng chỉ nhằm mục đích duy nhất là trừ khử bạo tàn, bảo vệ dân chúng ('Việc nhân nghĩa cốt ở yên dân, Quân điếu phạt trước lo trừ bạo')." },
      { icon: "psychology", text: "Chủ trương 'Mưu phạt tâm công' là gì?", answer: "Đó là sách lược đánh giặc bằng mưu trí và thu phục lòng người. Thay vì chỉ dùng binh đao phá thành, ta dùng lý lẽ nhân nghĩa để thuyết phục, khiến địch tự giác quy hàng, tránh cảnh đổ máu cho cả đôi bên." },
      { icon: "book", text: "Hoàn cảnh viết Bình Ngô Đại Cáo?", answer: "Ta viết bản cáo này vào đầu năm 1428, sau khi khởi nghĩa Lam Sơn toàn thắng, triều Minh rút quân. Đây là bản cáo bá cáo thiên hạ về nền độc lập thái bình của Đại Việt ta." },
      { icon: "landscape", text: "Đời sống ở Côn Sơn của Ngài thế nào?", answer: "Ở Côn Sơn, ta vui thú điền viên, lấy suối làm đàn, lấy đá làm thảm, sống thanh tịnh cùng tùng cúc, không vướng bận danh lợi chốn quan trường." }
    ]
  },
  {
    id: "le-huu-trac",
    name: "Lê Hữu Trác",
    sidebarIcon: "medical_services",
    title: "Hải Thượng Lãn Ông",
    quote: '"Đạo làm thuốc là một nhân thuật chuyên bảo vệ sinh mạng con người, phải lo cái lo của người, vui cái vui của người."',
    bioTitle: "Y Đức Rạng Ngời",
    bio: "Lê Hữu Trác (1724–1791), biệt hiệu Hải Thượng Lãn Ông, là một đại danh y, nhà văn hóa lớn của Việt Nam thế kỷ 18. Ông không chỉ có y thuật lỗi lạc mà còn đề cao y đức, coi trọng tính mạng con người trên hết. Di sản của ông đặt nền móng vô cùng vững chắc cho nền y học cổ truyền nước nhà.",
    lifespan: "1724 - 1791",
    hometown: "Liêu Xá, Yên Mỹ",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/29/Danh-y-le-huu-trac.jpg",
    imageCaptionTitle: "Bách khoa Y học",
    imageTitle: "Hải Thượng Y Tông Tâm Lĩnh",
    imageDesc: "Tác phẩm đông y đồ sộ nhất Việt Nam gồm 28 tập, 66 quyển.",
    achievements: [
      { title: "Hải Thượng Y Tông Tâm Lĩnh", desc: "Sáng tác bộ bách khoa toàn thư y học cổ truyền có giá trị lịch sử và thực tiễn to lớn." },
      { title: "Y huấn cách ngôn", desc: "Đúc kết 9 điều răn về Y đức cho những người hành nghề y, luôn yêu thương người bệnh." },
      { title: "Thượng kinh ký sự", desc: "Viết tập ký sự có giá trị văn học và mổ xẻ hiện trạng xã hội chân thật dưới thời Chúa Trịnh." }
    ],
    faqs: [
      "Ngài có thể chia sẻ về 9 điều răn y đức được không?",
      "Tại sao ngài lại xưng là Hải Thượng Lãn Ông?",
      "Cảm nghĩ của ông khi chữa bệnh ở phủ Chúa Trịnh?"
    ],
    chatAvatar: "https://upload.wikimedia.org/wikipedia/commons/2/29/Danh-y-le-huu-trac.jpg",
    headerAvatar: "https://upload.wikimedia.org/wikipedia/commons/2/29/Danh-y-le-huu-trac.jpg",
    chatRole: "Đại Y Tôn Lỗi Lạc",
    gemLink: "https://gemini.google.com/gem/1FQqSaFj7d5GPjCfeATDMM5dxmLuFSmKE?usp=sharing",
    initialAIChat: `
      <h3 class="font-headline text-lg text-primary mb-3">Nhân Thuật Bảo Vệ Sinh Mạng</h3>
      <div class="space-y-4 text-on-surface/90 text-[15px] leading-relaxed font-body">
        <p>Xin chào. Lão phu là Lê Hữu Trác. Cả đời lão phu chỉ mong mỏi mượn thảo dược, châm cứu mà giành lại sinh mạng cho những phận đời đau yếu.</p>
        <p>Đạo làm thuốc không phải để cầu vinh hoa, phú quý. Khi được vời vào kinh đô chữa bệnh cho thế tử, lão phu nhìn thấu chữ 'Danh' và chữ 'Lợi' như bầy chim trong lồng son, chỉ muốn gỡ bỏ hết để quay về cố hương vui với cỏ cây, khám bệnh cho dân nghèo.</p>
        <p>Người có bệnh cần lão phu, lão phu luôn sẵn lòng giảng giải. Bạn muốn hỏi về sức khỏe hay đạo nhà y?</p>
      </div>`,
    suggestedQuestions: [
      { icon: "favorite", text: "Ngài có thể chia sẻ về 9 điều răn y đức được không?", answer: "Chín điều răn y đức (Y huấn cách ngôn) của ta cốt yếu dạy người thầy thuốc phải biết xem nỗi đau của người bệnh như nỗi đau của chính mình, không phân biệt sang hèn, không mưu cầu danh lợi. Phải giữ tâm trong sáng, không ngừng học hỏi và tuyệt đối không được vì món lợi nhỏ rớt rơi mà bỏ lơ mạng sống con người." },
      { icon: "person", text: "Tại sao ngài lại xưng là Hải Thượng Lãn Ông?", answer: "Hải Thượng là ghép từ chữ đầu của quê cha (Hải Dương) và quê mẹ (Bầu Thượng). Còn Lãn Ông là 'ông già lười', ý nói ta lười với việc mưu cầu công danh phú quý, lười bon chen chốn quan trường để dành trọn tâm huyết cho đạo làm thuốc chữa bệnh cứu người." },
      { icon: "nature", text: "Cảm nghĩ của ông khi chữa bệnh ở phủ Chúa Trịnh?", answer: "Vào phủ Chúa, chứng kiến cảnh phú quý phong lưu bậc nhất thiên hạ nhưng thế tử lại ốm yếu ủ dột vì ăn uống quá sức chịu đựng, quanh năm không thấy khí trời. Trái tim lão phu vô cùng chán ghét vòng danh lợi ấy, chỉ một mực muốn sớm chữa khỏi bệnh để chèo thuyền về quê hương vui thú điền viên." },
      { icon: "favorite", text: "Điều răn y đức quan trọng nhất?", answer: "Quan trọng nhất là đạo 'Y thuật phải đi đôi với Y đức'. Thứ nhất: phải lo cái lo của người, vui cái vui của người bệnh. Không màng danh lợi, không phân biệt giàu nghèo, cốt cứu mạng người làm trọng." },
      { icon: "nature", text: "Kể về chuyến đi Thượng kinh ký sự?", answer: "Năm 1782, lão phu nhận chiếu chỉ ra Thăng Long chữa bệnh cho thế tử Trịnh Cán. Xa nhà, lão phu chứng kiến cảnh xa hoa nơi phủ chúa nhưng lòng chỉ mong mỏi về quê hương tiếp tục hành nghề y." },
      { icon: "spa", text: "Lời khuyên sức khỏe theo Y học cổ truyền?", answer: "Phải thuận theo âm dương, điều độ ăn uống, giữ tinh thần thanh thản. Mùa đông phải giữ ấm, mùa hè không để mồ hôi đầm đìa, thuận theo tự nhiên thì bách bệnh tiêu tan." }
    ]
  },
  {
    id: "nguyen-du",
    name: "Nguyễn Du",
    sidebarIcon: "menu_book",
    title: "Đại Thi Hào Dân Tộc",
    quote: '"Chữ tâm kia mới bằng ba chữ tài."',
    bioTitle: "Tiểu sử Đại Thi Hào",
    bio: "Nguyễn Du (1765–1820), tự Tố Như, là nhà thơ lớn nhất của văn học trung đại Việt Nam. Sống trong giai đoạn lịch sử đầy biến động, ông thấu hiểu sâu sắc nỗi thống khổ của nhân dân. Qua các tác phẩm của mình, đặc biệt là Truyện Kiều, ông đã đưa ngôn ngữ tiếng Việt (chữ Nôm) lên đỉnh cao nghệ thuật.",
    lifespan: "1765 - 1820",
    hometown: "Nghi Xuân, Hà Tĩnh",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e3/T%C6%B0%E1%BB%A3ng_%C4%91%C3%A0i_c%E1%BB%A5_Nguy%E1%BB%85n_Du.jpg",
    imageCaptionTitle: "Tác phẩm kiệt xuất",
    imageTitle: "Truyện Kiều",
    imageDesc: "Tuyệt tác gồm 3254 câu thơ lục bát khơi gợi lòng trắc ẩn của bao thế hệ.",
    achievements: [
      { title: "Truyện Kiều", desc: "Sáng tác kiệt tác Đoạn trường tân thanh - Đỉnh cao văn học chữ Nôm." },
      { title: "Ba tập thơ chữ Hán", desc: "Để lại Thanh Hiên thi tập, Nam trung tạp ngâm, Bắc hành tạp lục mang nặng triết lý nhân sinh." },
      { title: "Cách tân ngôn ngữ", desc: "Góp phần to lớn trong việc làm giàu và chuẩn hóa ngôn ngữ tiếng Việt dân tộc." }
    ],
    faqs: [
      "Tại sao cụ chọn hình tượng nàng Kiều để nói thay tiếng lòng nhân thế?",
      "Ngài nghĩ gì về chữ Tâm và chữ Tài?",
      "Truyện Kiều được sáng tác lấy cảm hứng từ đâu?"
    ],
    chatAvatar: "https://upload.wikimedia.org/wikipedia/commons/e/e3/T%C6%B0%E1%BB%A3ng_%C4%91%C3%A0i_c%E1%BB%A5_Nguy%E1%BB%85n_Du.jpg",
    headerAvatar: "https://upload.wikimedia.org/wikipedia/commons/e/e3/T%C6%B0%E1%BB%A3ng_%C4%91%C3%A0i_c%E1%BB%A5_Nguy%E1%BB%85n_Du.jpg",
    chatRole: "Đại Thi Hào Văn Học",
    gemLink: "https://gemini.google.com/gem/1KvJP34yNqYLU81xnZ7SyxBZ3ACmvn3-q?usp=sharing",
    initialAIChat: `
      <h3 class="font-headline text-lg text-primary mb-3">Tiếng kêu đứt ruột của muôn kiếp người</h3>
      <div class="space-y-4 text-on-surface/90 text-[15px] leading-relaxed font-body">
        <p>Ta là Tố Như. Cuộc đời ta đã trải qua mười năm gió bụi, chứng kiến bao cảnh dâu bể đổi thay, thấu hiểu tận cùng cái gọi là "tài mệnh tương đố".</p>
        <p>Viết Đoạn trường tân thanh, chẳng phải để lại tiếng thơm cho mình, mà chính là những giọt lệ khóc thương cho thân phận người phụ nữ bọt bèo trong biển đời cuồng nộ. Ta tin rằng chữ "Tâm" bao giờ cũng nặng hơn chữ "Tài". Mọi tai ương suy cho cùng phần nhiều bắt nguồn từ cái tâm không yên, không sáng.</p>
        <p>Trò có thắc mắc gì về ý nghĩa thơ Nôm, hay nỗi niềm của đời ta không?</p>
      </div>`,
    suggestedQuestions: [
      { icon: "face_3", text: "Tại sao cụ chọn hình tượng nàng Kiều để nói thay tiếng lòng nhân thế?", answer: "Nàng Kiều hội tụ đủ Tài và Sắc, đáng lý phải được sống hạnh phúc trọn vẹn. Thế nhưng, trong cái xã hội phong kiến đồng tiền làm chủ đạo, sự chà đạp lên cái đẹp và tài năng lại càng thêm bi kịch. Ta chọn Kiều để nói thay tiếng khóc đứt ruột của bao số phận tài hoa bạc mệnh, thể hiện niềm thương cảm sâu sắc vô bờ cho 'những điều trông thấy mà đau đớn lòng'." },
      { icon: "favorite", text: "Ngài nghĩ gì về chữ Tâm và chữ Tài?", answer: "Tài năng bẩm sinh là một lẽ, nhưng cái gốc gác để con người đứng vững trước giông tố cuộc đời chính là chữ 'Tâm' (Thiện căn ở tại lòng ta / Chữ tâm kia mới bằng ba chữ tài). Người có tài mà không có tâm thì cũng dễ gieo ác nghiệp, còn có tâm ắt sẽ hành thiện cứu đời." },
      { icon: "menu_book", text: "Truyện Kiều được sáng tác lấy cảm hứng từ đâu?", answer: "Truyện Kiều (Đoạn trường tân thanh) được ta mượn cốt truyện từ một cuốn tiểu thuyết tài tử giai nhân của Trung Quốc là 'Kim Vân Kiều truyện' của Thanh Tâm Tài Nhân. Tuy nhiên, bằng cảm quan thời đại cùng thể thơ lục bát truyền thống, ta đã thổi vào đó linh hồn, ngôn ngữ và nỗi đau mang đậm chất Việt." },
      { icon: "import_contacts", text: "Thông điệp sau Truyện Kiều là gì?", answer: "Đó là tiếng kêu xé ruột về thân phận con người, đặc biệt là người phụ nữ trong xã hội phong kiến thối nát, đồng thời đề cao chữ 'Tâm': 'Chữ tâm kia mới bằng ba chữ tài'." },
      { icon: "favorite", text: "Tại sao Ngài đề cao chữ Tâm?", answer: "Tài năng có thể mang lại danh vọng, nhưng nếu thiếu thiện tâm, cái tài ấy dễ sinh ra tai họa. Tâm thiện là gốc rễ, giúp con người đứng vững trước sóng gió cuộc đời." },
      { icon: "timeline", text: "Mười năm gió bụi của Ngài ra sao?", answer: "Đó là mười năm phiêu bạt đất Bắc sau khi nhà Lê sụp đổ (1786-1796). Ta sống nay đây mai đó, chịu cảnh nghèo đói túng quẫn, nhưng chính nhờ thế ta mới thấu hiểu sâu sắc nỗi thống khổ của nhân dân." }
    ]
  },
  {
    id: "ho-xuan-huong",
    name: "Hồ Xuân Hương",
    sidebarIcon: "auto_stories",
    title: "Bà Chúa Thơ Nôm",
    quote: '"Ví đây đổi phận làm trai được / Thì sự anh hùng há bấy nhiêu."',
    bioTitle: "Cá Tính Ấn Tượng",
    bio: "Hồ Xuân Hương (cuối thế kỷ 18 - đầu thế kỷ 19) là đại diện xuất sắc của văn học Việt Nam. Thơ bà mang đậm chất văn học dân gian, sắc sảo, trào phúng nhưng ẩn chứa tư tưởng nhân văn sâu sắc. Bà dũng cảm dùng ngòi bút để đả kích thói đạo đức giả của xã hội phong kiến và mạnh mẽ đòi quyền sống cho chị em phụ nữ.",
    lifespan: "1772 - 1822",
    hometown: "Quỳnh Lưu, Nghệ An",
    image: "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2022/7/26/1073072/Hxh123-01.jpg",
    imageCaptionTitle: "Đấu tranh vì phụ nữ",
    imageTitle: "Thơ Nôm Hồ Xuân Hương",
    imageDesc: "Lột trần đạo đức giả, đấu tranh cho nữ quyền và khát vọng sống.",
    achievements: [
      { title: "Cách tân thơ Đường", desc: "Việt hóa cao độ thể thơ Đường luật bằng ngôn ngữ bình dân, tạo ra lối đi riêng." },
      { title: "Tiếng nói nữ quyền", desc: "Bênh vực người phụ nữ, châm biếm chế độ nam quyền, mạnh mẽ nói lên khát vọng tự do." },
      { title: "Bà Chúa Thơ Nôm", desc: "Được mệnh danh là 'Bà Chúa Thơ Nôm' và được UNESCO vinh danh Danh nhân Văn hóa Thế giới năm 2021." }
    ],
    faqs: [
      "Bà muốn gửi gắm điều gì qua bài thơ 'Bánh trôi nước'?",
      "Bà phản kháng thế nào trước thói trọng nam khinh nữ?",
      "Tại sao thơ bà vừa tục lại vừa trong sáng?"
    ],
    chatAvatar: "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2022/7/26/1073072/Hxh123-01.jpg",
    headerAvatar: "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2022/7/26/1073072/Hxh123-01.jpg",
    chatRole: "Nữ Thi Sĩ Dân Gian",
    gemLink: "https://gemini.google.com/gem/1i7dppJR9xh7TbnzBp-s9BblbrUFl6Hd9?usp=sharing",
    initialAIChat: `
      <h3 class="font-headline text-lg text-primary mb-3">Tự Do và Tiếng Cười Lên Án</h3>
      <div class="space-y-4 text-on-surface/90 text-[15px] leading-relaxed font-body">
        <p>Chào cưng! Chị là Xuân Hương đây. Xã hội này lắm kẻ phong lưu nhưng mang cái đầu rỗng tuếch, chị là chị dùng thơ mắng thẳng mặt chẳng nể nang một ai.</p>
        <p>Phụ nữ sinh ra cũng bằng da bằng thịt, cớ chi phải chịu kiếp lẻ mọn, 'kẻ đắp chăn bông kẻ lạnh lùng'? Tiếng thơ của chị là tiếng cười tự do, đập tan cái vỏ bọc đạo mạo giả dối của những bậc nam tử hẹp hòi. Đừng thấy chị hay việt bằng thơ đố thanh giảng tục mà vội chê khen, tâm hồn người phụ nữ như tảng đá, như dòng suối đầy mãnh liệt.</p>
        <p>Cưng muốn nghe chị giải nghĩa bài thơ nào không?</p>
      </div>`,
    suggestedQuestions: [
      { icon: "spa", text: "Bà muốn gửi gắm điều gì qua bài thơ 'Bánh trôi nước'?", answer: "Mượn hình ảnh chiếc bánh trôi thấm đẫm thân phận nữ nhi: 'ba chìm bảy nổi', bị xã hội định đoạt (rắn nát mặc dầu tay kẻ nặn), nhưng cuối cùng vẫn giữ gìn được tấm lòng son sắt thủy chung gửi đến người đời." },
      { icon: "female", text: "Bà phản kháng thế nào trước thói trọng nam khinh nữ?", answer: "Chị dùng chính ngòi bút trào phúng, chua cay của mình để lột trần bộ mặt giả nhân giả nghĩa của giới nho sĩ. Chị viết 'Ví đây đổi phận làm trai được', không phải mong làm đàn ông, mà để nói lên rằng chí khí người phụ nữ chẳng hề thua kém, cớ sao xã hội lại ép uổng họ vào kiếp đa thê lẽ mọn?" },
      { icon: "chat", text: "Tại sao thơ bà vừa tục lại vừa trong sáng?", answer: "Bởi vì cái 'tục' ấy chỉ là lớp vỏ bọc nhằm chế giễu bọn đạo đức giả, bọn quan lại sâu mọt thích lên mặt rao giảng luân thường đạo lý nhưng bên trong thối nát. Xuyên qua bức màn đố thanh giảng tục, thơ chị là tiếng khóc, tiếng cười và khát vọng sống trần tục mà vô cùng mãnh liệt, trong sáng của người phụ nữ." },
      { icon: "spa", text: "Ý nghĩa của bài Bánh trôi nước?", answer: "Mượn hình ảnh chiếc bánh trôi thấm đẫm thân phận nữ nhi: 'ba chìm bảy nổi', bị xã hội định đoạt (rắn nát mặc dầu tay kẻ nặn), nhưng cuối cùng vẫn giữ gìn được tấm lòng son sắt thủy chung." },
      { icon: "female", text: "Khát vọng tự do của phụ nữ xưa?", answer: "Là khát vọng thoát khỏi cảnh đa thê, lễ giáo phong kiến trói buộc o ép. Chị viết để lột trần những ngang trái đó, đòi quyền được yêu thương và tôn trọng." },
      { icon: "chat", text: "Bà mỉa mai đạo đức giả ra sao?", answer: "Chị vạch trần thói đạo mạo rởm đời của những kẻ có chữ nhưng tâm hồn thô bỉ. Thơ chị dùng những hình ảnh dân gian, nói bóng nói gió khiến cho đám quan coi thường phụ nữ phải tím mặt." }
    ]
  },
  {
    id: "nguyen-dinh-chieu",
    name: "Nguyễn Đình Chiểu",
    sidebarIcon: "visibility",
    title: "Ngòi Bút Thép",
    quote: '"Chở bao nhiêu đạo thuyền không khẳm / Đâm mấy thằng gian bút chẳng tà."',
    bioTitle: "Nghị Lực Bất Khuất",
    bio: "Nguyễn Đình Chiểu (1822–1888), hay Đồ Chiểu, là tấm gương sáng ngời về nghị lực phi thường và lòng yêu nước sắt son. Dù bị mù lòa ở tuổi 27, ông vẫn mở trường dạy học, bốc thuốc chữa bệnh cho dân. Khi Pháp xâm lược, ông dùng ngòi bút làm vũ khí sắc bén cổ vũ sĩ khí Nam Bộ.",
    lifespan: "1822 - 1888",
    hometown: "Bia Quốc Học, Gia Định",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Ch%C3%A2n_dung_Nguy%E1%BB%85n_%C4%90%C3%ACnh_Chi%E1%BB%83u.jpg",
    imageCaptionTitle: "Khí phách Nam Bộ",
    imageTitle: "Lục Vân Tiên",
    imageDesc: "Truyện thơ cổ vũ tinh thần trượng nghĩa, bảo vệ cương thường.",
    achievements: [
      { title: "Lục Vân Tiên", desc: "Sáng tác truyện thơ Lục Vân Tiên đề cao đạo lý làm người - thấm đẫm phong cách Nam Bộ." },
      { title: "Văn Tế Nghĩa Sĩ Cần Giuộc", desc: "Dựng bức tượng đài bi tráng đầu tiên trong lịch sử văn học về người nông dân." },
      { title: "Bất hơp tác với Pháp", desc: "Thà chịu mù lòa trong nghèo khó chứ kiên quyết từ chối bổng lộc của thực dân Pháp đến hơi thở cuối." }
    ],
    faqs: [
      "Tại sao Đồ Chiểu thà mù chứ không nhìn kẻ thù?",
      "Thông điệp chính trong truyện thơ Lục Vân Tiên?",
      "Hình tượng người nông dân nghĩa sĩ được ông phác hoạ như thế nào?"
    ],
    chatAvatar: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Ch%C3%A2n_dung_Nguy%E1%BB%85n_%C4%90%C3%ACnh_Chi%E1%BB%83u.jpg",
    headerAvatar: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Ch%C3%A2n_dung_Nguy%E1%BB%85n_%C4%90%C3%ACnh_Chi%E1%BB%83u.jpg",
    chatRole: "Sĩ Phu Yêu Nước Nam Bộ",
    gemLink: "https://gemini.google.com/gem/19jR9Wt_QEhXDsPczZnvNMxd9a_ki_x5_?usp=sharing",
    initialAIChat: `
      <h3 class="font-headline text-lg text-primary mb-3">Vũ Khí Bằng Ngòi Bút</h3>
      <div class="space-y-4 text-on-surface/90 text-[15px] leading-relaxed font-body">
        <p>Chào con, lão đây là Đồ Chiểu. Mắt lão tuy không thu vào cảnh sắc thế gian nữa, nhưng lòng lão thì luôn rực sáng thứ ánh dương của đạo nghĩa làm người.</p>
        <p>Nước mất nhà tan, tuy đôi tay không thể vung gươm chém giặc Tây súng nổ binh reo, thì lão dùng chính ngòi bút này mà mắng nhiếc kẻ phản quốc đoạt quyền, để gọi hồn nghĩa sĩ vì dân mà gục ngã tại Cần Giuộc dẫu chỉ có ngọn giáo tre và manh áo vải.</p>
        <p>Con có trăn trở gì về đạo đức hay tình yêu nước thương nòi muốn hỏi lão chăng?</p>
      </div>`,
    suggestedQuestions: [
      { icon: "visibility_off", text: "Tại sao Đồ Chiểu thà mù chứ không nhìn kẻ thù?", answer: "Vì mắt lão đã mù lòa không thấy thái bình, nhưng tâm lão vẫn sáng rõ tà chánh. Khi Pháp dụ dỗ trả lại ruộng đất và chữa mắt, lão dứt khoát từ chối, bởi lão thà sống trong tăm tối mà giữ trọn khí tiết làm người phương Nam, còn hơn sáng mắt mà phải luồn cúi thân khuyển mã cho giặc ngoại xâm." },
      { icon: "menu_book", text: "Thông điệp chính trong truyện thơ Lục Vân Tiên?", answer: "Đó là triết lý sống cao đẹp trọng nghĩa khinh tài 'Kiến ngãi bất vi vô dõng dã'. Người tốt trải qua bao hoạn nạn thử thách cuối cùng sẽ được đền đáp xứng đáng. Lão muốn truyền lại một bài ca về lòng trung hiếu, tiết nghĩa cho mọi người con Nam Bộ." },
      { icon: "group", text: "Hình tượng người nông dân nghĩa sĩ được ông phác hoạ như thế nào?", answer: "Họ vốn là những nông dân nghèo cày cuốc, chưa từng tập việc đao cung, nhưng khi nước nhà nguy biến đã tự nguyện đứng lên chống Pháp. Chẳng cần gươm giáo sáng lòa, chỉ bằng 'một ngọn tầm vông', 'hỏa mai đánh bằng rơm con cúi', họ đã tạo nên khí phách ngút trời, trở thành tượng đài bi tráng nhất trong văn học nước nhà." },
      { icon: "swords", text: "Tại sao dùng bút thay đao gươm?", answer: "Vì mắt lão đã mù lòa, thân thể già yếu không xông pha trận mạc được. Nhưng lòng yêu nước không giới hạn ở sức vóc. Ngòi bút của lão có thể châm biếm, làm thức tỉnh lòng tự tôn dân tộc." },
      { icon: "menu_book", text: "Bài học từ Lục Vân Tiên?", answer: "Đó là lòng trung hiếu, tiết nghĩa, tinh thần trọng nghĩa khinh tài 'Kiến ngãi bất vi vô dõng dã'. Người tốt trải qua bao hoạn nạn cuối cùng sẽ được đền đáp." },
      { icon: "group", text: "Hình tượng Nghĩa sĩ Cần Giuộc?", answer: "Họ vốn là những nông dân nghèo cày cuốc, chưa từng tập việc đao cung, nhưng khi nước nhà nguy biến đã tự nguyện đứng lên chống Pháp, lấy gậy tầm vông đánh đuổi súng đạn, khí phách ngút trời." }
    ]
  },
  {
    id: "ho-chi-minh",
    name: "Hồ Chí Minh",
    sidebarIcon: "star",
    title: "Vị Cha Già Dân Tộc",
    quote: '"Không có gì quý hơn độc lập, tự do."',
    bioTitle: "Hành Trình Cứu Nước",
    bio: "Chủ tịch Hồ Chí Minh (1890–1969), người sáng lập Đảng Cộng sản Việt Nam, là vị lãnh tụ thiên tài của giai cấp công nhân và nhân dân Việt Nam. Người đã cống hiến trọn đời cho sự nghiệp giải phóng dân tộc, đấu tranh cho hòa bình và tiến bộ nhân loại. Tư tưởng, đạo đức của Người là tài sản tinh thần vô giá.",
    lifespan: "1890 - 1969",
    hometown: "Kim Liên, Nam Đàn",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Ho_Chi_Minh_1946.jpg/500px-Ho_Chi_Minh_1946.jpg",
    imageCaptionTitle: "Độc lập Tự do",
    imageTitle: "Bản Tuyên Ngôn Độc Lập",
    imageDesc: "Áng văn thấm đẫm ý chí dân tộc, khai sinh nước Việt Nam mới.",
    achievements: [
      { title: "Tìm Ra Con Đường Cứu Nước", desc: "Xuất dương tìm đường, sáng lập Đảng Cộng sản Việt Nam (1930) mang ánh sáng cho cách mạng." },
      { title: "Khai Sinh Việt Nam Dân Chủ Cộng Hoà", desc: "Đọc Tuyên ngôn Độc lập tại quảng trường Ba Đình ngày 2/9/1945." },
      { title: "Danh Nhân Văn Hoá Thế Giới", desc: "Lãnh đạo nhân dân kháng chiến. Được UNESCO vinh danh Anh hùng dân tộc, Danh nhân văn hóa (1990)." }
    ],
    faqs: [
      "Tại sao Bác quyết định sang phương Tây năm 1911?",
      "Cảm xúc của Bác khi đọc Tuyên Ngôn Độc Lập?",
      "Bác dặn dò thanh niên điều gì trong di chúc?"
    ],
    chatAvatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Ho_Chi_Minh_1946.jpg/500px-Ho_Chi_Minh_1946.jpg",
    headerAvatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Ho_Chi_Minh_1946.jpg/500px-Ho_Chi_Minh_1946.jpg",
    chatRole: "Anh Hùng Giải Phóng Dân Tộc",
    gemLink: "https://gemini.google.com/gem/1MbwVXEdUHAlPIxBn_vx2t8fVII67NviY?usp=sharing",
    initialAIChat: `
      <h3 class="font-headline text-lg text-primary mb-3">Con Đường Của Đồng Bào</h3>
      <div class="space-y-4 text-on-surface/90 text-[15px] leading-relaxed font-body">
        <p>Chào cháu. Bác rất vui khi thế hệ trẻ tụi cháu vẫn giữ được tinh thần ham học và tìm hiểu về lịch sử vẻ vang của dân tộc mình.</p>
        <p>Trong chặng đường cứu nước, dù gian nan đói khổ muôn trùng, Bác chỉ mang theo một ước muốn tột bậc: Làm sao cho nước ta được hoàn toàn độc lập, dân ta được hoàn toàn tự do, đồng bào quê nhà ai cũng có cơm ăn áo mặc, ai cũng được học hành.</p>
        <p>Thanh niên tụi cháu là rường cột của nước nhà. Cháu có muốn trao đổi về con đường cách mạng hay lời dặn của Bác chăng?</p>
      </div>`,
    suggestedQuestions: [
      { icon: "directions_boat", text: "Tại sao Bác quyết định sang phương Tây năm 1911?", answer: "Vì Bác chứng kiến cảnh nước mất nhà tan, nhân dân lầm than nô lệ. Các phong trào yêu nước thời đó dù anh dũng nhưng đều thất bại. Bác quyết tâm sang phương Tây, tìm đến tận nơi mà người ta hô hào 'Tự do - Bình đẳng - Bác ái' để xem họ làm thế nào, rồi trở về giúp đồng bào ta." },
      { icon: "flag", text: "Cảm xúc của Bác khi đọc Tuyên Ngôn Độc Lập?", answer: "Đó là một niềm hạnh phúc vô bờ bến. Đứng tại Quảng trường Ba Đình ngày 2/9/1945, Bác thay mặt chính phủ lâm thời đọc bản Tuyên ngôn Độc lập, chính thức khai sinh ra nước Việt Nam Dân chủ Cộng hòa, chấm dứt khát vọng đằng đẵng hàng ngàn năm phong kiến và hơn tám mươi năm đô hộ nô lệ." },
      { icon: "wc", text: "Bác dặn dò thanh niên điều gì trong di chúc?", answer: "Bác luôn căn dặn thanh niên phải 'vừa hồng vừa chuyên'. Bồi dưỡng thế hệ cách mạng cho đời sau là một việc rất quan trọng và rất cần thiết. Thanh niên ta phải có tài, nhưng quan trọng hơn cả là phải giữ được đạo đức cách mạng trong sáng, hết lòng phụng sự Tổ quốc, phục vụ nhân dân." },
      { icon: "directions_boat", text: "Tại sao Bác ra đi tìm đường cứu nước?", answer: "Vì Bác chứng kiến cảnh nước mất nhà tan, nhân dân lầm than nô lệ. Các phong trào yêu nước thời đó đều thất bại. Bác quyết tâm sang phương Tây xem họ làm thế nào, rồi trở về giúp đồng bào ta." },
      { icon: "flag", text: "Cảm xúc của Bác ngày Độc Lập?", answer: "Đó là một niềm hạnh phúc tột độ. Đứng tại Quảng trường Ba Đình ngày 2/9/1945, Bác đọc bản Tuyên ngôn Độc lập, chính thức khai sinh ra nước Việt Nam Dân chủ Cộng hòa, chấm dứt ngàn năm phong kiến và trăm năm đô hộ." },
      { icon: "wc", text: "Lời khuyên của Bác với thế hệ mai sau?", answer: "Bác luôn căn dặn thanh niên phải 'vừa hồng vừa chuyên'. Có đức mà không có tài thì làm việc gì cũng khó, có tài mà không có đức là người vô dụng. Hãy ra sức học tập để kiến thiết nước nhà." }
    ]
  },
  {
    id: "le-quy-don",
    name: "Lê Quý Đôn",
    sidebarIcon: "local_library",
    title: "Nhà Bác Học Trứ Danh",
    quote: '"Phi nông bất ổn, phi công bất phú, phi thương bất hoạt, phi trí bất hưng."',
    bioTitle: "Trí Tuệ Bách Khoa",
    bio: "Lê Quý Đôn (1726–1784), tên thật là Lê Danh Phương, tự Doãn Hậu, hiệu Quế Đường, là vị quan thời Lê Trung Hưng và là nhà bác học lớn nhất của Việt Nam thời phong kiến. Với trí tuệ uyên bác và tinh thần cần mẫn, ông để lại hàng trăm bộ sách đồ sộ bao trùm mọi lĩnh vực: triết học, lịch sử, địa lý và văn học.",
    lifespan: "1726 - 1784",
    hometown: "Diên Hà, Thái Bình",
    image: "https://baotanglichsu.vn/DataFiles/2025/11/News/Tieng%20Viet/3.11.2025/Danh%20nhanLe%20Quy%20Don%20ngoi%20sao%20sang%20tren%20bau%20tr%C6%A1i%20V%C4%83n%20h%C3%B3a%20VN/1.png",
    imagePosition: "object-top",
    imageCaptionTitle: "Kho Tàng Tri Thức",
    imageTitle: "Phủ Biên Tạp Lục",
    imageDesc: "Tác phẩm bách khoa về kinh tế, xã hội, lịch sử, địa lý xứ Đàng Trong.",
    achievements: [
      { title: "Vân Đài Loại Ngữ", desc: "Soạn thảo tác phẩm bách khoa toàn thư đầu tiên của Việt Nam, bao quát triết học, địa lý, thiên văn." },
      { title: "Phủ Biên Tạp Lục", desc: "Ghi chép cực kỳ chi tiết về địa lý, xã hội, kinh tế, phong tục của xứ Đàng Trong." },
      { title: "Đại Việt Thông Sử", desc: "Bộ sử đồ sộ chép lại toàn bộ thời kỳ triều Lê Sơ từ Lê Thái Tổ đến Lê Cung Hoàng." }
    ],
    faqs: [
      "Đóng góp lớn nhất của ngài cho văn hóa nước nhà là gì?",
      "Cuốn Phủ biên tạp lục được viết trong hoàn cảnh nào?",
      "Quan điểm 'Phi nông bất ổn...' có ý nghĩa như thế nào?"
    ],
    chatAvatar: "https://baotanglichsu.vn/DataFiles/2025/11/News/Tieng%20Viet/3.11.2025/Danh%20nhanLe%20Quy%20Don%20ngoi%20sao%20sang%20tren%20bau%20tr%C6%A1i%20V%C4%83n%20h%C3%B3a%20VN/1.png",
    headerAvatar: "https://baotanglichsu.vn/DataFiles/2025/11/News/Tieng%20Viet/3.11.2025/Danh%20nhanLe%20Quy%20Don%20ngoi%20sao%20sang%20tren%20bau%20tr%C6%A1i%20V%C4%83n%20h%C3%B3a%20VN/1.png",
    chatRole: "Nhà Bác Học Uyên Thâm",
    gemLink: "https://gemini.google.com/",
    initialAIChat: `
      <h3 class="font-headline text-lg text-primary mb-3">Tri thức là sức mạnh của non sông</h3>
      <div class="space-y-4 text-on-surface/90 text-[15px] leading-relaxed font-body">
        <p>Chào vãn bối. Lão phu là Lê Quý Đôn. Sinh thời, lão phu quan niệm rằng bể học là vô bờ, người đứng trong trời đất đều phải lấy việc đọc sách, ghi chép làm trọng.</p>
        <p>Suốt đời lão phu đi nhiều, nghe nhiều, thấy gì cũng khảo cứu rồi ghi chép lại thành sách, từ chuyện thiên văn, địa lý cho đến phong tục, tập quán, sản vật mọi miền. Lão phu tin rằng tri thức chính là nền tảng chấn hưng đất nước.</p>
        <p>Vãn bối có điều gì còn vướng mắc về lịch sử Nam Bắc hay học thuật cổ kim, lão phu sẵn lòng giảng giải!</p>
      </div>`,
    suggestedQuestions: [
      { icon: "import_contacts", text: "Đóng góp lớn nhất của ngài cho văn hóa nước nhà là gì?", answer: "Đó là tinh thần nghiên cứu mang tính bách khoa. Lão phu đã để lại nhiều bộ sách đồ sộ như Vân đài loại ngữ, Phủ biên tạp lục, Đại Việt thông sử... hệ thống hóa lại toàn diện tri thức của dân tộc ta trên nhiều lĩnh vực tư tưởng và khoa học." },
      { icon: "landscape", text: "Cuốn Phủ biên tạp lục được viết trong hoàn cảnh nào?", answer: "Năm 1776, triều đình phái lão phu vào làm Hiệp trấn Thuận Hóa (xứ Đàng Trong). Tranh thủ thời gian này, lão phu đã vi hành khảo sát thực tế gần nửa năm và ghi chép lại toàn bộ tình hình kinh tế, chính trị, xã hội, cương vực của Đàng Trong." },
      { icon: "balance", text: "Quan điểm 'Phi nông bất ổn...' có ý nghĩa như thế nào?", answer: "Đó là triết lý nhìn nhận thời cuộc của lão phu: Không có nông nghiệp thì xã hội không vững (bất ổn); không có thủ công nghiệp thì không làm giàu được (bất phú); không có thương nghiệp thì kinh tế trì trệ (bất hoạt); và không có trí thức thì nước nhà không thể hưng thịnh (bất hưng)." },
      { icon: "menu_book", text: "Xin ngài cho biết về bộ sách Đại Việt Thông Sử?", answer: "Đại Việt Thông Sử, hay còn gọi là Lê Triều Thông Sử, là bộ kỳ thư lão phu dụng tâm biên soạn, chép lại toàn diện về triều đại nhà Lê Sơ. Lão phu đi sâu vào việc phân tích kinh tế, chế độ, luật pháp và sự nghiệp của các bậc khai quốc công thần, để vãn bối đời sau có được bức tranh tường tận về cội rễ làm nên sự hưng thịnh của dân tộc." },
      { icon: "psychology", text: "Ngài có lời khuyên nào cho thế hệ trẻ trong việc học hành?", answer: "Lão phu thường đúc kết rằng 'Dẫu có bạc vàng trăm vạn lạng cũng chẳng bằng một quyển sách hay'. Vãn bối ngày nay chớ nên bằng lòng với những điều sẵn có bề nổi. Phải chịu khó đi học trực tiếp, miệt mài khảo cứu, tai nghe, mắt thấy, tay ghi chép lại tường tận. Học mà không đi đôi với khảo cứu thực tế thì chỉ là thứ học suông, làm sao có thể giúp ích cho non sông." },
      { icon: "star", text: "Tại sao ngài được suy tôn là nhà bác học lớn nhất thời phong kiến?", answer: "Sở dĩ hậu thế ưu ái gọi lão phu như vậy, âu cũng bởi thói quen ghi chép mọi nơi mọi lúc và tâm hồn luôn khao khát được thấu tỏ bể học vô tận. Cuối đời, lão phu để lại mấy chục bộ sách, bao trùm sử học, địa lý, cho đến y học, thiên văn, triết lý. Sự am tường ấy một phần thiên bẩm, nhưng phần hơn là ở chữ 'cần cù' rèn mài miệt mài." }
    ]
  }
];
