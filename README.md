"""# مشروع روبوت محادثة لخدمة العملاء (Customer Chatbot Project)

## الوصف
هذا المشروع عبارة عن روبوت محادثة لخدمة العملاء مبني باستخدام Node.js و Google Dialogflow. يهدف الروبوت إلى الإجابة على استفسارات العملاء الشائعة وتقديم الدعم الأساسي.

## الميزات
*   التفاعل مع المستخدمين عبر واجهة برمجة تطبيقات RESTful.
*   استخدام Google Dialogflow لفهم اللغة الطبيعية (NLU) وإدارة الحوار.
*   تقديم ردود آلية على الأسئلة المتكررة.

## التقنيات المستخدمة
*   **اللغة:** JavaScript (Node.js)
*   **المكتبات:** `express`, `@google-cloud/dialogflow`

## المتطلبات الأساسية
*   **Google Cloud Project:** يجب أن يكون لديك مشروع على Google Cloud مع تمكين Dialogflow API.
*   **Dialogflow Agent:** يجب إنشاء وكيل (Agent) في Dialogflow وتدريبه على النوايا (Intents) والاستجابات (Responses) الخاصة بخدمة العملاء.
*   **Authentication:** يجب إعداد مصادقة Google Cloud (مثل تعيين متغير البيئة `GOOGLE_APPLICATION_CREDENTIALS` إلى مسار ملف مفتاح حساب الخدمة).

## كيفية التشغيل
1.  انتقل إلى مجلد المشروع:
    ```bash
    cd node_projects/customer_chatbot
    ```
2.  تثبيت التبعيات:
    ```bash
    npm install
    ```
3.  **تكوين المشروع:**
    *   افتح ملف `index.js`.
    *   استبدل `YOUR_GOOGLE_CLOUD_PROJECT_ID` بمعرف مشروع Google Cloud الخاص بك.
    *   تأكد من إعداد مصادقة Google Cloud بشكل صحيح في بيئتك.
4.  تشغيل الخادم:
    ```bash
    node index.js
    ```
5.  اختبار واجهة برمجة التطبيقات (API) (مثال باستخدام `curl`):
    ```bash
    curl -X POST -H "Content-Type: application/json" -d '{"message": "Hello"}' http://localhost:3001/message
    ```

## ملاحظات
هذا المشروع يتطلب إعدادًا خارجيًا لـ Google Dialogflow. تأكد من تدريب وكيل Dialogflow الخاص بك بشكل كافٍ لتقديم استجابات ذات معنى.
