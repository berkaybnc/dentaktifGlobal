/* ==========================================================================
   DENT AKTIF CLINIC GLOBAL - REACT CONSULTATION API SERVICE (SQLite)
   ========================================================================== */

export async function submitConsultationApi(payload) {
  try {
    const response = await fetch('/api/consultations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      const data = await response.json();
      return { success: true, data };
    } else {
      const err = await response.json();
      return { success: false, error: err.error || 'Failed to submit' };
    }
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function fetchLeadsApi() {
  try {
    const response = await fetch('/api/consultations');
    if (response.ok) {
      const data = await response.json();
      return data.leads || [];
    }
    return [];
  } catch (err) {
    console.error('Failed to fetch leads from SQLite DB:', err);
    return [];
  }
}

export async function updateLeadStatusApi(id, status) {
  try {
    const response = await fetch(`/api/consultations/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status })
    });
    return response.ok;
  } catch (err) {
    console.error('Failed to update lead status:', err);
    return false;
  }
}

export async function deleteLeadApi(id) {
  try {
    const response = await fetch(`/api/consultations/${id}`, {
      method: 'DELETE'
    });
    return response.ok;
  } catch (err) {
    console.error('Failed to delete lead:', err);
    return false;
  }
}
