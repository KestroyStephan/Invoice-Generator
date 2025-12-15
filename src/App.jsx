import React, { useState } from 'react';
import { Printer, Plus, Trash2, FileText, User, MapPin, Calendar, Hash, Briefcase, PenTool } from 'lucide-react';

const InputGroup = ({ label, value, onChange, type = "text", placeholder, className = "", icon: Icon }) => (
  <div className={`flex flex-col ${className}`}>
    <label className="text-xs font-bold text-gray-500 uppercase mb-1.5 ml-1">{label}</label>
    <div className="relative group">
      {Icon && (
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors">
          <Icon size={16} />
        </div>
      )}
      <input 
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full p-2.5 ${Icon ? 'pl-10' : 'pl-3'} bg-white border border-gray-200 rounded-lg text-sm text-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all shadow-sm hover:border-gray-300`}
      />
    </div>
  </div>
);

const TextAreaGroup = ({ label, value, onChange, placeholder, icon: Icon }) => (
  <div className="flex flex-col">
    <label className="text-xs font-bold text-gray-500 uppercase mb-1.5 ml-1">{label}</label>
    <div className="relative group">
      {Icon && (
        <div className="absolute left-3 top-3 text-gray-400 group-focus-within:text-blue-500 transition-colors">
          <Icon size={16} />
        </div>
      )}
      <textarea 
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows="3"
        className={`w-full p-2.5 ${Icon ? 'pl-10' : 'pl-3'} bg-white border border-gray-200 rounded-lg text-sm text-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all shadow-sm hover:border-gray-300 resize-none`}
      />
    </div>
  </div>
);

export default function App() {
  // -- State --
  const [docType, setDocType] = useState('QUOTATION'); // Default to Quotation
  const [docNumber, setDocNumber] = useState('Q-2025-001');
  const [date, setDate] = useState(new Date().toISOString().substr(0, 10));
  
  // Sender Details
  const [companyName, setCompanyName] = useState('Pool Table Services');
  const [companyAddress, setCompanyAddress] = useState('123 Main Street, Colombo');
  
  // Client Details
  const [clientName, setClientName] = useState('Mr. Kamal Perera');
  const [clientAddress, setClientAddress] = useState('31 De Fonseka Rd,\nColombo 00500');
  
  const [items, setItems] = useState([
    { id: 1, desc: 'Pool Ball Set - Premium', price: 25000, qty: 1 },
    { id: 2, desc: 'Triangle Rack (Standard)', price: 3500, qty: 1 },
    { id: 3, desc: 'Table Brush', price: 3500, qty: 1 },
    { id: 4, desc: 'Chalk Box (Blue)', price: 300, qty: 5 },
    { id: 5, desc: 'Cue Repair Service', price: 1000, qty: 5 },
  ]);

  // -- Theme Colors --
  // Dynamic colors based on Document Type
  const themeColor = docType === 'INVOICE' ? 'bg-blue-600' : 'bg-emerald-600';
  const themeText = docType === 'INVOICE' ? 'text-blue-600' : 'text-emerald-600';
  const themeBorder = docType === 'INVOICE' ? 'border-blue-600' : 'border-emerald-600';
  const themeLight = docType === 'INVOICE' ? 'bg-blue-50 text-blue-800' : 'bg-emerald-50 text-emerald-800';

  // -- Calculations --
  const calculateTotal = () => {
    return items.reduce((acc, item) => acc + (item.price * item.qty), 0);
  };

  // -- Handlers --
  const handleItemChange = (id, field, value) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, [field]: value } : item
    ));
  };

  const addItem = () => {
    setItems([...items, { id: Date.now(), desc: '', price: 0, qty: 1 }]);
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const printDocument = () => {
    window.print();
  };

  const formatCurrency = (num) => {
    return num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen font-sans bg-gray-100 text-gray-900">
      
      {/* Internal Styles for Print */}
      <style>{`
        @media print {
          body * {
            visibility: hidden;
          }
          .print-container, .print-container * {
            visibility: visible;
          }
          .print-container {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            margin: 0;
            padding: 20px;
            background: white;
          }
          .no-print {
            display: none !important;
          }
          /* Ensure colors print correctly */
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
        }
        
        .invoice-paper {
          background: white;
          width: 100%;
          max-width: 800px;
          min-height: 1000px;
          margin: 0 auto;
          box-shadow: 0 15px 40px rgba(0,0,0,0.08);
          padding: 40px;
          position: relative;
        }
        @media print {
            .invoice-paper {
                box-shadow: none;
                margin: 0;
                width: 100%;
                max-width: 100%;
            }
        }
      `}</style>

      {/* --- LEFT SIDE: EDITOR (No Print) --- */}
      <div className="w-full lg:w-1/3 bg-gray-50 border-r border-gray-200 overflow-y-auto h-screen no-print z-20 flex flex-col">
        
        {/* Editor Header */}
        <div className="bg-white border-b border-gray-200 p-6 sticky top-0 z-10 shadow-sm">
            <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                <PenTool className="w-5 h-5 text-gray-500" /> 
                Document Creator
            </h2>
            <p className="text-gray-400 text-xs mt-1">Customize your document details below</p>
            
            {/* Mode Switcher */}
            <div className="flex bg-gray-100 p-1 rounded-lg mt-4">
                <button 
                    onClick={() => { setDocType('INVOICE'); setDocNumber('INV-2025-001'); }}
                    className={`flex-1 py-2 text-sm font-medium rounded-md transition-all duration-200 ${docType === 'INVOICE' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                >
                    Invoice
                </button>
                <button 
                    onClick={() => { setDocType('QUOTATION'); setDocNumber('QTN-2025-001'); }}
                    className={`flex-1 py-2 text-sm font-medium rounded-md transition-all duration-200 ${docType === 'QUOTATION' ? 'bg-white text-emerald-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                >
                    Quotation
                </button>
            </div>
        </div>

        <div className="p-6 space-y-6 pb-24">
            {/* Document Settings */}
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 space-y-4">
            <h3 className="text-sm font-bold text-gray-800 border-b border-gray-100 pb-2 mb-2 flex items-center gap-2">
                <FileText size={16} className="text-gray-400" /> Document Info
            </h3>
            <div className="grid grid-cols-2 gap-4">
                <InputGroup label="Number" value={docNumber} onChange={(e) => setDocNumber(e.target.value)} icon={Hash} />
                <InputGroup label="Date" type="date" value={date} onChange={(e) => setDate(e.target.value)} icon={Calendar} />
            </div>
            </div>

            {/* Company Details */}
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 space-y-4">
                <h3 className="text-sm font-bold text-gray-800 border-b border-gray-100 pb-2 mb-2 flex items-center gap-2">
                    <Briefcase size={16} className="text-gray-400" /> Your Company
                </h3>
                <InputGroup label="Company Name" value={companyName} onChange={(e) => setCompanyName(e.target.value)} icon={Briefcase} />
                <InputGroup label="Address / Tagline" value={companyAddress} onChange={(e) => setCompanyAddress(e.target.value)} icon={MapPin} />
            </div>

            {/* Client Details */}
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 space-y-4">
            <h3 className="text-sm font-bold text-gray-800 border-b border-gray-100 pb-2 mb-2 flex items-center gap-2">
                <User size={16} className="text-gray-400" /> Client Details
            </h3>
            <InputGroup label="Client Name" value={clientName} onChange={(e) => setClientName(e.target.value)} icon={User} placeholder="Client Name" />
            <TextAreaGroup label="Client Address" value={clientAddress} onChange={(e) => setClientAddress(e.target.value)} icon={MapPin} placeholder="Enter client address..." />
            </div>

            {/* Items Editor */}
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-center border-b border-gray-100 pb-2 mb-4">
                <h3 className="text-sm font-bold text-gray-800 flex items-center gap-2">
                    <PenTool size={16} className="text-gray-400" /> Products / Services
                </h3>
                <button onClick={addItem} className={`text-xs ${themeText} hover:underline font-medium flex items-center gap-1`}>
                <Plus className="w-3 h-3" /> Add Item
                </button>
            </div>
            
            <div className="space-y-3">
                {items.map((item, index) => (
                <div key={item.id} className="bg-gray-50 p-3 rounded-lg border border-gray-200 relative group hover:border-blue-300 transition-colors">
                    <button 
                    onClick={() => removeItem(item.id)}
                    className="absolute -top-2 -right-2 bg-white border border-red-100 text-red-400 hover:text-red-600 hover:bg-red-50 p-1 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-all"
                    title="Remove Item"
                    >
                    <Trash2 className="w-3 h-3" />
                    </button>
                    <div className="mb-2">
                    <input 
                        value={item.desc}
                        onChange={(e) => handleItemChange(item.id, 'desc', e.target.value)}
                        placeholder="Item Description"
                        className="w-full bg-transparent border-b border-gray-200 focus:border-blue-400 outline-none text-sm font-medium text-gray-700 pb-1"
                    />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                    <div className="flex flex-col">
                        <span className="text-[10px] uppercase text-gray-400 font-bold">Price</span>
                        <input 
                            type="number" 
                            value={item.price} 
                            onChange={(e) => handleItemChange(item.id, 'price', parseFloat(e.target.value) || 0)} 
                            className="bg-white border border-gray-200 rounded px-2 py-1 text-sm"
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[10px] uppercase text-gray-400 font-bold">Qty</span>
                        <input 
                            type="number" 
                            value={item.qty} 
                            onChange={(e) => handleItemChange(item.id, 'qty', parseFloat(e.target.value) || 0)} 
                            className="bg-white border border-gray-200 rounded px-2 py-1 text-sm"
                        />
                    </div>
                    </div>
                </div>
                ))}
            </div>
            </div>
        </div>

        {/* Action Buttons */}
        <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4 mt-auto shadow-lg">
            <button 
            onClick={printDocument}
            className={`w-full ${themeColor} hover:opacity-90 text-white font-bold py-3 px-4 rounded-xl shadow-md transition transform active:scale-[0.98] flex items-center justify-center gap-2`}
            >
            <Printer className="w-5 h-5" /> Generate PDF
            </button>
        </div>
      </div>

      {/* --- RIGHT SIDE: PREVIEW (Print Area) --- */}
      <div className="w-full lg:w-2/3 bg-gray-200/80 p-8 overflow-y-auto h-screen flex justify-center relative">
        
        {/* Paper Document */}
        <div className="invoice-paper text-gray-800 print-container">
          
          {/* Document Top Bar */}
          <div className={`h-2 w-full ${themeColor} absolute top-0 left-0`}></div>

          {/* Header Section */}
          <div className="flex justify-between items-start mb-12 pt-4">
            <div>
                {/* Company Logo Placeholder */}
                <div className={`w-12 h-12 rounded-lg ${themeLight} flex items-center justify-center mb-4`}>
                    <Briefcase size={24} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">{companyName}</h2>
                <p className="text-gray-500 text-sm mt-1">{companyAddress}</p>
            </div>
            <div className="text-right">
              <h1 className={`text-5xl font-black opacity-10 tracking-tighter uppercase leading-none ${themeText}`}>
                {docType}
              </h1>
              <div className="mt-4">
                  <p className="text-gray-500 text-xs uppercase tracking-wider font-semibold">Date</p>
                  <p className="font-medium mb-2">{date}</p>
                  <p className="text-gray-500 text-xs uppercase tracking-wider font-semibold">{docType === 'INVOICE' ? 'Invoice #' : 'Quote #'}</p>
                  <p className={`font-bold text-lg ${themeText}`}>{docNumber}</p>
              </div>
            </div>
          </div>

          {/* Client Section */}
          <div className="flex justify-between items-end mb-12 border-b border-gray-100 pb-8">
            <div>
                <p className={`text-xs uppercase tracking-wider font-bold mb-2 ${themeText}`}>
                    {docType === 'INVOICE' ? 'Bill To' : 'Quotation For'}
                </p>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{clientName}</h3>
                <p className="text-gray-600 whitespace-pre-line leading-relaxed text-sm max-w-xs">
                {clientAddress}
                </p>
            </div>
          </div>

          {/* Items Table */}
          <div className="mb-10">
            <table className="w-full border-collapse">
                <thead>
                <tr>
                    <th className={`text-left py-3 px-2 border-b-2 ${themeBorder} text-xs uppercase tracking-wider font-bold text-gray-500 w-1/2`}>Description</th>
                    <th className={`text-right py-3 px-2 border-b-2 ${themeBorder} text-xs uppercase tracking-wider font-bold text-gray-500`}>Price</th>
                    <th className={`text-right py-3 px-2 border-b-2 ${themeBorder} text-xs uppercase tracking-wider font-bold text-gray-500`}>Qty</th>
                    <th className={`text-right py-3 px-2 border-b-2 ${themeBorder} text-xs uppercase tracking-wider font-bold text-gray-500`}>Total</th>
                </tr>
                </thead>
                <tbody>
                {items.map((item) => (
                    <tr key={item.id} className="group border-b border-gray-100 last:border-none">
                    <td className="py-4 px-2 text-sm font-medium text-gray-700 group-hover:text-gray-900">{item.desc}</td>
                    <td className="py-4 px-2 text-sm text-right text-gray-500">{formatCurrency(item.price)}</td>
                    <td className="py-4 px-2 text-sm text-right text-gray-500">{item.qty}</td>
                    <td className="py-4 px-2 text-sm text-right font-medium text-gray-900">{formatCurrency(item.price * item.qty)}</td>
                    </tr>
                ))}
                </tbody>
            </table>
          </div>

          {/* Totals Section */}
          <div className="flex justify-end mb-16">
              <div className="w-64 space-y-3">
                  <div className="flex justify-between items-center text-gray-500 text-sm">
                      <span>Subtotal</span>
                      <span>{formatCurrency(calculateTotal())} LKR</span>
                  </div>
                  {/* Add Tax/Discount logic here later if needed */}
                  <div className={`flex justify-between items-center border-t-2 ${themeBorder} pt-3`}>
                      <span className={`font-bold text-lg ${themeText}`}>Total</span>
                      <span className="font-bold text-xl text-gray-900">{formatCurrency(calculateTotal())} LKR</span>
                  </div>
              </div>
          </div>

          {/* Footer / Terms */}
          <div className="mt-auto pt-8 border-t border-gray-100">
            <h4 className="text-xs font-bold text-gray-400 uppercase mb-2">Terms & Conditions</h4>
            <p className="text-xs text-gray-500 leading-relaxed">
                {docType === 'QUOTATION' 
                    ? "This quotation is valid for 30 days. Prices are subject to change without prior notice." 
                    : "Please make checks payable to Pool Table Services. Payment is due within 14 days."
                }
            </p>
            <div className="mt-8 text-center">
                <p className={`text-sm font-medium ${themeText}`}>Thank you for your business!</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}